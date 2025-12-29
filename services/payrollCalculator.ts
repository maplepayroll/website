
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
}> = {
  2024: {
    cpp: { ympe: 68500, exemption: 3500, rate: 0.0595, maxBase: 3867.50 },
    cpp2: { yampe: 73200, rate: 0.0400, maxEnhanced: 188.00 },
    ei: { mie: 63200, rate: 0.0166, maxPremium: 1049.12 },
    bpa: 15705
  },
  2025: {
    cpp: { ympe: 71300, exemption: 3500, rate: 0.0595, maxBase: 4034.10 },
    cpp2: { yampe: 81200, rate: 0.0400, maxEnhanced: 396.00 },
    ei: { mie: 65700, rate: 0.0164, maxPremium: 1077.48 },
    bpa: 15964
  },
  2026: {
    cpp: { ympe: 72700, exemption: 3500, rate: 0.0595, maxBase: 4117.40 },
    cpp2: { yampe: 82800, rate: 0.0400, maxEnhanced: 404.00 },
    ei: { mie: 67000, rate: 0.0164, maxPremium: 1098.80 },
    bpa: 16283
  }
};

export interface PayrollParams {
  income: number;
  payType?: 'annual' | 'hourly';
  province?: string;
  year?: number;
  frequency?: 'annual' | 'monthly' | 'semi-monthly' | 'biweekly' | 'weekly' | 'daily';
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
    'semi-monthly': 24,
    biweekly: 26, 
    weekly: 52,
    daily: 260 
  };
  const displayDivider = dividers[frequency] || 26;

  let annualGross = payType === 'annual' ? income : income * hoursPerWeek * 52;
  const taxableIncomeAnnual = Math.max(0, annualGross);

  // CPP & EI
  const contributoryEarnings = Math.max(0, Math.min(annualGross, rates.cpp.ympe) - rates.cpp.exemption);
  const annualCPPBase = contributoryEarnings * rates.cpp.rate;
  let annualCPP2 = 0;
  if (annualGross > rates.cpp.ympe) {
    annualCPP2 = (Math.min(annualGross, rates.cpp2.yampe) - rates.cpp.ympe) * rates.cpp2.rate;
  }
  const annualEI = Math.min(Math.min(annualGross, rates.ei.mie) * rates.ei.rate, rates.ei.maxPremium);

  // Split Tax
  const fedBaseRate = 0.15;
  let fedTax = 0;
  let provTax = taxableIncomeAnnual * province.taxRate;

  if (taxableIncomeAnnual > rates.bpa) {
     let fedEffectiveRate = fedBaseRate;
     if (taxableIncomeAnnual > 55000) fedEffectiveRate += 0.05;
     if (taxableIncomeAnnual > 111000) fedEffectiveRate += 0.06;
     fedTax = Math.max(0, (taxableIncomeAnnual * fedEffectiveRate) - (rates.bpa * fedBaseRate));
  }
  
  const totalAnnualDeductions = fedTax + provTax + annualCPPBase + annualCPP2 + annualEI;
  const annualNet = annualGross - totalAnnualDeductions;

  const format = (n: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(n / displayDivider);

  return {
    netPay: format(annualNet),
    grossPay: format(annualGross),
    frequency,
    deductions: {
      fedTax: format(fedTax),
      provTax: format(provTax),
      cppBase: format(annualCPPBase),
      cpp2: format(annualCPP2),
      ei: format(annualEI),
      totalDeductions: format(totalAnnualDeductions)
    }
  };
}
