import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
    checkLanguage () {
        console.log("Do checkLanguage");
        if(this.isNull(localStorage.getItem('lang'))){
            localStorage.setItem('lang', 'TH');
        }
    };
    
    isNull (val:string){
        return val=="" || val==null;
    }
    
}