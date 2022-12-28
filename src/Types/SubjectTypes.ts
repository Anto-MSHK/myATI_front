import { ITeacher } from 'src/Types/TeacherTypes';

export interface ISubject {
    _id?: string;
    title: string;
    types?: string[];
    cabinets?: string[];
    teachers?: ITeacher[];
    groups?: string[];
}

export interface ISubjectResponse {
    status: string,
    result: ISubject;
}
export interface ISubjectsResponse {
    status: string,
    result: string[];
}

