export class User{
    fname : string = ''
    lname : string =''
    email : string = ''
    pass : string = ''
    address : string = ''
    constructor(fname:string,lname:string,email:string,pass:string,address:string){
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.pass=pass;
        this.address=address;
    }
}