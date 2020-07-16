import { IAddress } from './IAddress';

export interface ISchool {
    id: string;
    name: string;
    address: IAddress;
    studentCount: number;
}