// lib/utils.ts

export function cn(...inputs: Array<string | false | undefined | null>): string {
  return inputs.filter(Boolean).join(" ");
}

