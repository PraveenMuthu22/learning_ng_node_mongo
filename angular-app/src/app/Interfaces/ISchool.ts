import { IAddress } from './IAddress';

export interface ISchool {
    _id: string;
    name: string;
    address: IAddress;
    studentCount: number;
}