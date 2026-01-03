
export interface TaxBracket {
  threshold: number;
  rate: number;
  constant: number;
}

export const PROVINCIAL_DATA: Record<string, { brackets: TaxBracket[], wsibRate: number }> = {
  'Ontario': { 
    wsibRate: 0.0165, // Avg rate 1.65%
    brackets: [
      { threshold: 0, rate: 0.0505, constant: 0 },
      { threshold: 52446, rate: 0.0915, constant: 2150 },
      { threshold: 104891, rate: 0.1116, constant: 4259 },
      { threshold: 150000, rate: 0.1216, constant: 5759 },
      { threshold: 220000, rate: 0.1316, constant: 7959 }
    ]
  },
  'British Columbia': { 
    wsibRate: 0.0155,
    brackets: [
      { threshold: 0, rate: 0.0506, constant: 0 },
      { threshold: 47937, rate: 0.0770, constant: 1266 },
      { threshold: 95875, rate: 0.1050, constant: 3950 },
      { threshold: 110057, rate: 0.1229, constant: 5920 },
      { threshold: 133664, rate: 0.1470, constant: 9140 },
      { threshold: 181232, rate: 0.1680, constant: 12946 },
      { threshold: 252752, rate: 0.2050, constant: 22300 }
    ]
  },
  'Alberta': { 
    wsibRate: 0.0120,
    brackets: [
      { threshold: 0, rate: 0.10, constant: 0 },
      { threshold: 148269, rate: 0.12, constant: 2965 },
      { threshold: 177922, rate: 0.13, constant: 4745 },
      { threshold: 237230, rate: 0.14, constant: 7117 },
      { threshold: 355845, rate: 0.15, constant: 10675 }
    ]
  },
  'Quebec': { 
    wsibRate: 0.0210, // CNESST is higher avg
    brackets: [
      { threshold: 0, rate: 0.14, constant: 0 },
      { threshold: 51780, rate: 0.19, constant: 2589 },
      { threshold: 103545, rate: 0.24, constant: 7766 },
      { threshold: 126000, rate: 0.2575, constant: 9973 }
    ]
  },
  'Saskatchewan': { wsibRate: 0.0130, brackets: [{ threshold: 0, rate: 0.105, constant: 0 }, { threshold: 52057, rate: 0.125, constant: 1041 }, { threshold: 148734, rate: 0.145, constant: 4016 }] },
  'Manitoba': { wsibRate: 0.0110, brackets: [{ threshold: 0, rate: 0.108, constant: 0 }, { threshold: 47000, rate: 0.1275, constant: 917 }, { threshold: 100000, rate: 0.174, constant: 5567 }] },
  'Nova Scotia': { wsibRate: 0.0250, brackets: [{ threshold: 0, rate: 0.0879, constant: 0 }, { threshold: 29590, rate: 0.1495, constant: 1823 }, { threshold: 59180, rate: 0.1667, constant: 2841 }, { threshold: 93000, rate: 0.175, constant: 3612 }, { threshold: 150000, rate: 0.21, constant: 8862 }] },
  'New Brunswick': { wsibRate: 0.0180, brackets: [{ threshold: 0, rate: 0.094, constant: 0 }, { threshold: 49958, rate: 0.14, constant: 2298 }, { threshold: 99916, rate: 0.16, constant: 4296 }, { threshold: 185064, rate: 0.195, constant: 10774 }] },
  'PEI': { wsibRate: 0.0160, brackets: [{ threshold: 0, rate: 0.095, constant: 0 }, { threshold: 32656, rate: 0.135, constant: 1306 }, { threshold: 64307, rate: 0.145, constant: 1950 }, { threshold: 105000, rate: 0.165, constant: 4050 }, { threshold: 140000, rate: 0.1875, constant: 7200 }] },
  'Newfoundland and Labrador': { wsibRate: 0.0170, brackets: [{ threshold: 0, rate: 0.087, constant: 0 }, { threshold: 43198, rate: 0.145, constant: 2505 }, { threshold: 86395, rate: 0.158, constant: 3628 }, { threshold: 154313, rate: 0.178, constant: 6714 }, { threshold: 216038, rate: 0.198, constant: 11035 }] },
};

export const FEDERAL_BRACKETS: TaxBracket[] = [
  { threshold: 0, rate: 0.15, constant: 0 },
  { threshold: 55867, rate: 0.205, constant: 3073 },
  { threshold: 111733, rate: 0.26, constant: 9218 },
  { threshold: 173205, rate: 0.29, constant: 14414 },
  { threshold: 246752, rate: 0.33, constant: 24284 }
];

export const YEARLY_RATES: Record<number, any> = {
  2024: {
    cpp: { ympe: 68500, exemption: 3500, rate: 0.0595, maxBase: 3867.50 },
    qpp: { ympe: 68500, exemption: 3500, rate: 0.0640, maxBase: 4160.00 },
    cpp2: { yampe: 73200, rate: 0.0400, maxEnhanced: 188.00 },
    ei: { mie: 63200, rate: 0.0166, maxPremium: 1049.12, qcRate: 0.0132, qcMax: 834.24 },
    qpip: { mie: 94000, rate: 0.00494, maxPremium: 464.36 },
    bpa: { min: 14156, max: 15705, threshold: 173205, top: 246752 },
    cea: 1433
  },
  2025: {
    cpp: { ympe: 71300, exemption: 3500, rate: 0.0595, maxBase: 4034.10 },
    qpp: { ympe: 71300, exemption: 3500, rate: 0.0640, maxBase: 4339.20 },
    cpp2: { yampe: 81200, rate: 0.0400, maxEnhanced: 396.00 },
    ei: { mie: 65700, rate: 0.0164, maxPremium: 1077.48, qcRate: 0.0130, qcMax: 854.10 },
    qpip: { mie: 97500, rate: 0.00494, maxPremium: 481.65 },
    bpa: { min: 14389, max: 15964, threshold: 181232, top: 252752 },
    cea: 1456
  },
  2026: {
    cpp: { ympe: 72700, exemption: 3500, rate: 0.0595, maxBase: 4117.40 },
    qpp: { ympe: 72700, exemption: 3500, rate: 0.0640, maxBase: 4428.80 },
    cpp2: { yampe: 82800, rate: 0.0400, maxEnhanced: 404.00 },
    ei: { mie: 67000, rate: 0.0164, maxPremium: 1098.80, qcRate: 0.0130, qcMax: 871.00 },
    qpip: { mie: 99500, rate: 0.00494, maxPremium: 491.53 },
    bpa: { min: 14677, max: 16283, threshold: 184857, top: 257807 },
    cea: 1485
  }
};

export const PROVINCES = Object.keys(PROVINCIAL_DATA).map(name => ({ name }));

export interface PayrollParams {
  income: number;
  payType?: 'annual' | 'hourly';
  province?: string;
  year?: number;
  frequency?: 'annual' | 'monthly' | 'semi-monthly' | 'biweekly' | 'weekly' | 'daily';
  hoursPerWeek?: number;
  claimAmount?: number;
  preTaxDeductions?: number;
  afterTaxDeductions?: number;
  vacationRate?: number; // 0.04 or 0.06
  vacationMethod?: 'accrued' | 'paid_per_cycle';
}

function calculateTax(income: number, brackets: TaxBracket[]): number {
  let tax = 0;
  for (let i = brackets.length - 1; i >= 0; i--) {
    if (income > brackets[i].threshold) {
      tax = (income * brackets[i].rate) - brackets[i].constant;
      break;
    }
  }
  return Math.max(0, tax);
}

function calculateBPA(annualIncome: number, rates: any): number {
  const { min, max, threshold, top } = rates.bpa;
  if (annualIncome <= threshold) return max;
  if (annualIncome >= top) return min;
  return max - ((annualIncome - threshold) * ((max - min) / (top - threshold)));
}

function calculateOHP(annualIncome: number): number {
  if (annualIncome <= 20000) return 0;
  if (annualIncome <= 36000) return Math.min(300, (annualIncome - 20000) * 0.06);
  if (annualIncome <= 48000) return 300 + Math.min(150, (annualIncome - 36000) * 0.06);
  if (annualIncome <= 72000) return 450 + Math.min(150, (annualIncome - 48000) * 0.25);
  if (annualIncome <= 200000) return 600 + Math.min(150, (annualIncome - 72000) * 0.25);
  return 750 + Math.min(150, (annualIncome - 200000) * 0.25);
}

export function calculatePayroll(params: PayrollParams) {
  const { 
    income, 
    payType = 'annual', 
    province: provinceName = 'Ontario', 
    year = 2026, 
    frequency = 'biweekly',
    hoursPerWeek = 40,
    claimAmount,
    preTaxDeductions = 0,
    afterTaxDeductions = 0,
    vacationRate = 0.04,
    vacationMethod = 'accrued'
  } = params;

  const provinceData = PROVINCIAL_DATA[provinceName] || PROVINCIAL_DATA['Ontario'];
  const rates = YEARLY_RATES[year] || YEARLY_RATES[2026];
  const isQC = provinceName === 'Quebec';
  
  const dividers: Record<string, number> = { annual: 1, monthly: 12, 'semi-monthly': 24, biweekly: 26, weekly: 52, daily: 260 };
  const displayDivider = dividers[frequency] || 26;

  let annualBase = payType === 'annual' ? income : income * hoursPerWeek * 52;
  
  // Vacation Logic
  const annualVacationAmount = annualBase * vacationRate;
  let annualGrossTaxable = annualBase;
  if (vacationMethod === 'paid_per_cycle') {
    annualGrossTaxable = annualBase + annualVacationAmount;
  }

  const taxableIncomeAnnual = Math.max(0, annualGrossTaxable - preTaxDeductions);

  // 1. Pension Contribution (Employee)
  const pensionExemption = rates.cpp.exemption;
  const pensionYMPE = isQC ? rates.qpp.ympe : rates.cpp.ympe;
  const pensionRate = isQC ? rates.qpp.rate : rates.cpp.rate;
  const pensionMaxBase = isQC ? rates.qpp.maxBase : rates.cpp.maxBase;
  const contributoryEarnings = Math.max(0, Math.min(annualGrossTaxable, pensionYMPE) - pensionExemption);
  const annualPensionBase = Math.min(contributoryEarnings * pensionRate, pensionMaxBase);
  let annualPension2 = 0;
  if (annualGrossTaxable > pensionYMPE) {
    annualPension2 = Math.min((Math.min(annualGrossTaxable, rates.cpp2.yampe) - pensionYMPE) * rates.cpp2.rate, rates.cpp2.maxEnhanced);
  }

  // 2. EI & QPIP (Employee)
  const eiRate = isQC ? rates.ei.qcRate : rates.ei.rate;
  const eiMax = isQC ? rates.ei.qcMax : rates.ei.maxPremium;
  const annualEI = Math.min(Math.min(annualGrossTaxable, rates.ei.mie) * eiRate, eiMax);
  let annualQPIP = 0;
  if (isQC) annualQPIP = Math.min(annualGrossTaxable * rates.qpip.rate, rates.qpip.maxPremium);

  // 3. Federal Tax (With BPA Clawback)
  const federalTaxGross = calculateTax(taxableIncomeAnnual, FEDERAL_BRACKETS);
  const bpaFederal = claimAmount !== undefined ? claimAmount : calculateBPA(annualGrossTaxable, rates);
  const fedCredits = bpaFederal + rates.cea;
  const fedTax = Math.max(0, federalTaxGross - (fedCredits * 0.15));

  // 4. Provincial Tax
  const provTaxGross = calculateTax(taxableIncomeAnnual, provinceData.brackets);
  const provTax = Math.max(0, provTaxGross - (bpaFederal * provinceData.brackets[0].rate));
  let healthPremium = provinceName === 'Ontario' ? calculateOHP(taxableIncomeAnnual) : 0;

  // 5. Employer Burden Calculation
  const erPensionBase = annualPensionBase; // 1:1 match
  const erPension2 = annualPension2;
  const erEI = annualEI * 1.4; // 1.4x match
  let erQPIP = isQC ? Math.min(annualGrossTaxable * 0.00692, 674.31) : 0; // Employer QPIP rate
  const erWSIB = Math.min(annualGrossTaxable, 100000) * provinceData.wsibRate; // Capped at est limit
  const erVacation = annualVacationAmount; // Liability regardless of when paid
  
  const totalAnnualDeductions = fedTax + provTax + healthPremium + annualPensionBase + annualPension2 + annualEI + annualQPIP;
  const annualNetPreAfterTax = annualGrossTaxable - totalAnnualDeductions;
  
  // Apply After-Tax Deductions
  const finalAnnualNet = Math.max(0, annualNetPreAfterTax - afterTaxDeductions);
  
  const totalAnnualEmployerCost = annualGrossTaxable + erPensionBase + erPension2 + erEI + erQPIP + erWSIB + (vacationMethod === 'accrued' ? erVacation : 0);

  const format = (n: number) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(n / displayDivider);

  return {
    netPay: format(finalAnnualNet),
    grossPay: format(annualGrossTaxable),
    basePay: format(annualBase),
    vacationPay: format(annualVacationAmount),
    vacationMethod,
    totalEmployerCost: format(totalAnnualEmployerCost),
    frequency,
    province: provinceName,
    activeRates: {
      pension: (pensionRate * 100).toFixed(2) + '%',
      pension2: (rates.cpp2.rate * 100).toFixed(2) + '%',
      ei: (eiRate * 100).toFixed(2) + '%',
      qpip: (rates.qpip?.rate * 100 || 0).toFixed(3) + '%'
    },
    deductions: {
      fedTax: format(fedTax),
      provTax: format(provTax),
      healthPremium: format(healthPremium),
      pensionLabel: isQC ? 'QPP (Base)' : 'CPP (Base)',
      pensionBase: format(annualPensionBase),
      pension2Label: isQC ? 'QPP2 (Enhanced)' : 'CPP2 (Enhanced)',
      pension2: format(annualPension2),
      ei: format(annualEI),
      qpip: format(annualQPIP),
      afterTax: format(afterTaxDeductions),
      totalDeductions: format(totalAnnualDeductions + afterTaxDeductions)
    },
    employerBurden: {
      cppBaseMatch: format(erPensionBase),
      cpp2Match: format(erPension2),
      eiMatch: format(erEI),
      qpipMatch: format(erQPIP),
      wsib: format(erWSIB),
      vacation: format(erVacation),
      totalBurden: format(erPensionBase + erPension2 + erEI + erQPIP + erWSIB + erVacation)
    }
  };
}
