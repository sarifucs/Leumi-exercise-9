export class TodoModel {
    public constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public group?: string,
        public when?: Date) { }
}