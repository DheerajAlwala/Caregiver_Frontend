export class AuthRequest{
    email : string = ''
    pass : string = ''
    constructor(email : string, pass : string){
        this.email = email;
        this.pass = pass;
    }
}