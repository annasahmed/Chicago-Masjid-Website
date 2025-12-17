// Hijri date calculation utility
// Based on the Umm al-Qura calendar algorithm

// const ISLAMIC_EPOCH = 1948439.5;

function gregorianToJulian(year: number, month: number, day: number): number {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

function julianToHijri(jd: number): { year: number; month: number; day: number } {
  const L = Math.floor(jd - 1948439.5) + 10632;
  const N = Math.floor((L - 1) / 10631);
  const L2 = L - 10631 * N + 354;
  const J = Math.floor((10985 - L2) / 5316) * Math.floor((50 * L2) / 17719) + Math.floor(L2 / 5670) * Math.floor((43 * L2) / 15238);
  const L3 = L2 - Math.floor((30 - J) / 15) * Math.floor((17719 * J) / 50) - Math.floor(J / 16) * Math.floor((15238 * J) / 43) + 29;
  const month = Math.floor((24 * L3) / 709);
  const day = L3 - Math.floor((709 * month) / 24);
  const year = 30 * N + J - 30;
  
  return { year, month, day };
}

export function getHijriDate(date: Date): { year: number; month: number; day: number; monthName: string } {
  const jd = gregorianToJulian(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const hijri = julianToHijri(jd);
  
  const hijriMonths = [
    "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
    "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhul Qi'dah", "Dhul Hijjah"
  ];
  
  return {
    ...hijri,
    monthName: hijriMonths[hijri.month - 1] || hijriMonths[0]
  };
}

export function formatHijriDate(date: Date): string {
  const hijri = getHijriDate(date);
  return `${hijri.day} ${hijri.monthName} ${hijri.year} AH`;
}

export function getArabicHijriDate(date: Date): string {
  const hijri = getHijriDate(date);
  const arabicMonths = [
    "محرم", "صفر", "ربيع الأول", "ربيع الثاني",
    "جمادى الأولى", "جمادى الثانية", "رجب", "شعبان",
    "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
  ];
  return `${hijri.day} ${arabicMonths[hijri.month - 1]} ${hijri.year} هـ`;
}
