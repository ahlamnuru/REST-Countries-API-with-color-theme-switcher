export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

export function joinNames(items?: { name: string }[]): string {
  if (!items || items.length === 0) {
    return "N/A";
  }

  return items.map((item) => item.name).join(", ");
}
