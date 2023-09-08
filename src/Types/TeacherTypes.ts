export interface ITeacher {
  _id?: string;
  name: string;
  degree?: string;
  subjects?: string[];
  groups?: string[];
  photo_url?: string | undefined;
  fullName?: string | undefined;
  cathedra?: string | undefined;
  allInfo?: string | undefined;
  additional?: string | undefined;
}
export interface ITeacherListResponse {
  status: string;
  result: ITeacher[];
}
export interface ITeacherResponse {
  status: string;
  result: ITeacher;
}
