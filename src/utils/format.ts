// Frontmatter dates like 2026-11-18 are parsed as UTC; format in UTC so the day never shifts.
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-MX', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}
