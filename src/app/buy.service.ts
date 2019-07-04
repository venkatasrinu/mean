import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  
  

  constructor() { }
  sampleService(){
    console.log("service working")
    //alert("working")
  }
}
