export class Comment {
    public id: string;
    public userName: string;
    public comment: string;
    public edditMode: boolean;
    public date: Date;

    constructor(id, userName, comment) {
        this.id = id;
        this.userName = userName;
        this.comment = comment;
        this.edditMode = false;
    }
}
