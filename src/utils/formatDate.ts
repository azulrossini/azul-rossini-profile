import type { MonthYearISO } from "../types/profile";

/**
 * Formats a "YYYY-MM-DD" date as "Mon YYYY" (e.g. "Aug 2022").
 */
export const formatMonthYear = (iso: MonthYearISO): string =>
  new Date(iso).toLocaleString("en-US", { month: "short", year: "numeric" });

/**
 * Formats a start/end date pair as a period string, e.g. "Aug 2022 - Dec 2025".
 * When `endDate` is omitted the role/program is treated as ongoing ("Present").
 */
export const formatPeriod = (
  startDate: MonthYearISO,
  endDate?: MonthYearISO
): string => {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return `${start} - ${end}`;
};
