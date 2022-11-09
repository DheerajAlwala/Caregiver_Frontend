import { EventEmitter } from "@angular/core";
export class Emitter{
    static check=new EventEmitter<boolean>();
    static search=new EventEmitter<string>();
    static cgflag=new EventEmitter<boolean>();
}