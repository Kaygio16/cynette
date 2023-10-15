export interface DashboardHandler {
  header?: boolean;
  children: React.ReactNode;
}

export interface PageErrorType {
  status: number;
  statusText: string;
  error: Error;
  data: string;
  internal: boolean;
  message: string;
}

export interface ThemeContextType {
    children: React.ReactNode;
    theme: string
}