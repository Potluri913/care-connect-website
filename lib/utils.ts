import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function calculateMonthlyPrice(residentCount: number): number {
  if (residentCount <= 50) return 5000;
  const additionalBlocks = Math.ceil((residentCount - 50) / 50);
  return 5000 + additionalBlocks * 1500;
}

export function formatIndianCurrency(amount: number): string {
  return amount.toLocaleString("en-IN");
}
