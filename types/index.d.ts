interface CustomError extends Error {
  status?: number;
  info?: any;
}

interface Option {
  label: string;
  value: string | number;
}
