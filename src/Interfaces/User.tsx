export interface User {
  name: string;
  start: number;
  end: number;
  currentPages?: number | 0;
  totalPages?: number | 0;
  perDay?: number | 0;
}