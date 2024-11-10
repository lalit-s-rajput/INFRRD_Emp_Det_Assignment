export interface resultData {
  empCode: string;
  empDesignation: string;
  empEmailId: string;
  empId: number;
  empName: string;
  role: string;
}
export interface Data {
  message: string;
  result: boolean;
  data: resultData[];
}
