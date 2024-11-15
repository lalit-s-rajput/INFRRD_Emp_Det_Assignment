export interface ResultData {
  empCode: string;
  empDesignation: string;
  empEmailId: string;
  id: string;
  empName: string;
  role: string;
}
export interface filterState {
  searchString: string;
  designation: String;
}
export interface Data {
  data: ResultData[];
}
