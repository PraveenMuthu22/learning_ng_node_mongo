import { IAddress } from './IAddress';

export interface ISchool {
    _id: string;
    name: string;
    address: string;
    boarding: boolean;
    studentCount: number;
}