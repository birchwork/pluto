import { twMerge } from "tailwind-merge";

import { type ClassValue, clsx } from "clsx";

type AddressType = string | null | undefined;

interface shortAddressProps {
  address: AddressType;
  start: number;
  end: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortAddress({
  address,
  start,
  end,
}: shortAddressProps): string {
  try {
    if (!address) {
      return "";
    }
    if (address.length <= start + end) {
      return address;
    }
    return `${address.substring(0, start)}...${address.substring(
      address.length - end,
      address.length,
    )}`;
  } catch (error) {
    return "";
  }
}

export function shortAddressTwoChars(address: AddressType) {
  return address ? address.substring(0, 2) : "";
}
