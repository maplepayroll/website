
export const PROVINCES = [
  { name: 'Ontario', taxRate: 0.0505 },
  { name: 'British Columbia', taxRate: 0.0506 },
  { name: 'Alberta', taxRate: 0.10 },
  { name: 'Manitoba', taxRate: 0.108 },
  { name: 'New Brunswick', taxRate: 0.094 },
  { name: 'Newfoundland and Labrador', taxRate: 0.087 },
  { name: 'Nova Scotia', taxRate: 0.0879 },
  { name: 'Prince Edward Island', taxRate: 0.098 },
  { name: 'Saskatchewan', taxRate: 0.105 },
  { name: 'Quebec', taxRate: 0.14 },
];

export const YEARLY_RATES: Record<number, { 
  cpp: { ympe: number; exemption: number; rate: number; maxBase: number };
  cpp2: { yampe: number; rate: number; maxEnhanced: number };
  ei: { mie: number; rate: number; maxPremium: number };
  bpa: number; 
  inflation: number; 
}> = {
  2024: {
    cpp: { ympe: 68500, exemption: 3500, rate: 0.0595, maxBase: 3867.50 },
    cpp2: { yampe: 73200, rate: 0.0400, maxEnhanced: 188.00 },
    ei: { mie: 63200, rate: 0.0166, maxPremium: 1049.12 },
    bpa: 15705,
    inflation: 1.0
  },
  2025: {
    cpp: { ympe: 71300, exemption: 3500, rate: 0.0595, maxBase: 4034.10 },
    cpp2: { yampe: 81200, rate: 0.0400, maxEnhanced: 396.00 },
    ei: { mie: 65700, rate: 0.0164, maxPremium: 1077.48 },
    bpa: 15964,
    inflation: 1.027
  },
  2026: {
    cpp: { ympe: 72700, exemption: 3500, rate: 0.0595, maxBase: 4117.30 },
    cpp2: { yampe: 82800, rate: 0.0400, maxEnhanced: 404.00 },
    ei: { mie: 67000, rate: 0.0164, maxPremium: 1098.80 },
    bpa: 16283,
    inflation: 1.048
  }
};

export interface PayrollParams {
  income: number;
  payType?: 'annual' | 'hourly';
  province?: string;
  year?: number;
  frequency?: 'annual' | 'monthly' | 'biweekly' | 'weekly';
  hoursPerWeek?: number;
}

export function calculatePayroll(params: PayrollParams) {
  const { 
    income, 
    payType = 'annual', 
    province: provinceName = 'Ontario', 
    year = 2024, 
    frequency = 'biweekly',
    hoursPerWeek = 40
  } = params;

  const province = PROVINCES.find(p => p.name.toLowerCase() === provinceName.toLowerCase()) || PROVINCES[0];
  const rates = YEARLY_RATES[year] || YEARLY_RATES[2024];
  
  const dividers: Record<string, number> = {
    annual: 1,
    monthly: 12,
    biweekly: 26,
    weekly: 52
  };
  
  const displayDivider = dividers[frequency] || 26;

  let annualGrossEstimate = 0;
  if (payType === 'annual') {
    annualGrossEstimate = income;
  } else {
    annualGrossEstimate = income * hoursPerWeek * 52;
  }

  // CPP
  const pensionableEarnings = annualGrossEstimate;
  const basePensionable = Math.min(pensionableEarnings, rates.cpp.ympe);
  const contributoryEarnings = Math.max(0, basePensionable - rates.cpp.exemption);
  const annualCPPBase = contributoryEarnings * rates.cpp.rate;

  let annualCPP2 = 0;
  if (pensionableEarnings > rates.cpp.ympe) {
    const enhancedContributory = Math.min(pensionableEarnings, rates.cpp2.yampe) - rates.cpp.ympe;
    annualCPP2 = Math.max(0, enhancedContributory * rates.cpp2.rate);
  }
  const totalAnnualCPP = annualCPPBase + annualCPP2;

  // EI
  const insurableEarnings = Math.min(annualGrossEstimate, rates.ei.mie);
  const annualEI = Math.min(insurableEarnings * rates.ei.rate, rates.ei.maxPremium);

  // Split Tax Calculation
  const fedBaseRate = 0.15;
  let fedTax = 0;
  let provTax = annualGrossEstimate * province.taxRate;
  
  if (annualGrossEstimate > rates.bpa) {
     // Federal portion with simplified progressive step
     let fedEffectiveRate = fedBaseRate;
     if (annualGrossEstimate > 55000) fedEffectiveRate += 0.05;
     if (annualGrossEstimate > 100000) fedEffectiveRate += 0.05;
     if (annualGrossEstimate > 160000) fedEffectiveRate += 0.04;
     
     const fedRaw = annualGrossEstimate * fedEffectiveRate;
     const bpaCredit = rates.bpa * fedBaseRate; 
     fedTax = Math.max(0, fedRaw - bpaCredit);
  }
  
  const annualNet = Math.max(0, annualGrossEstimate - fedTax - provTax - totalAnnualCPP - annualEI);

  const formatMoney = (n: number) => {
    return new Intl.NumberFormat('en-CA', { 
      style: 'currency', 
      currency: 'CAD',
      minimumFractionDigits: 2 
    }).format(n / displayDivider);
  };

  return {
    summary: `Payroll Estimate for ${formatMoney(annualGrossEstimate * displayDivider)}/year (${province.name})`,
    frequency: frequency,
    grossPay: formatMoney(annualGrossEstimate),
    netPay: formatMoney(annualNet),
    deductions: {
      fedTax: formatMoney(fedTax),
      provTax: formatMoney(provTax),
      cppBase: formatMoney(annualCPPBase),
      cpp2: formatMoney(annualCPP2),
      ei: formatMoney(annualEI)
    },
    totalDeductions: formatMoney(fedTax + provTax + totalAnnualCPP + annualEI)
  };
}
