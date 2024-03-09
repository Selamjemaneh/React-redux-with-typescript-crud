export interface IEmployee {
    employeeId: number;
    name: string;
    isActive: boolean
    birthday: any
    id: String
}

export interface IEmployeeList extends IEmployee {
    dateCreated: any
}