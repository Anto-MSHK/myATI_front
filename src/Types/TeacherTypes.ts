export interface ITeacher {
    _id?: string;
    name: string;
    degree?: string;
    subjects?: string[];
    groups?: string[];
}
export interface ITeacherListResponse{
    status: string;
    result: ITeacher[];
}
export interface ITeacherResponse{
    status: string;
    result: ITeacher;
  
}
