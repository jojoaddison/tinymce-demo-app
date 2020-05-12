import { Moment } from 'moment';

export interface ITask {
    id?: string;
    name?: string;
    description?: string;
    createdDate?: Moment;
    modifiedDate?: Moment;
    lastModifiedBy?: string;
}

export class Task implements ITask {
    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        public createdDate?: Moment,
        public modifiedDate?: Moment,
        public lastModifiedBy?: string
    ) {}
}
