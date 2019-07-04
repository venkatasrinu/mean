import {Injectable} from '@angular/core'

@ Injectable()

export class SellService{
    constructor(){}
    showdate(){
       var ndate = new Date()
      // alert(ndate)
   return ndate;
}
}