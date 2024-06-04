import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formattedDate(p: string): string {
  const date = new Date(p);
  return format(date, "hh:mm a dd-MM-yyyy"); // You can adjust the format as needed
}