import { Component,OnInit} from '@angular/core';
import { BuyService} from './buy.service';
import { SellService} from '../services/sell'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
 uname="";data;
  constructor (private myservice :BuyService,private sellsel :SellService,private http :Http){}
  
  ngOnInit()  {
    
   
    //  console.log("in the call")

    //  this.http.get("/getname").subscribe(data=>{
       
    //    console.log("data",data)
    //  })

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // map((Response)=> Response.json()).
    //  subscribe((data =>console.log(data)))
  }
 

 
  funins(){
    var ob={name:this.uname}

    this.http.post("users/ins",ob).subscribe(
      dt=>{      
      console.log(dt,"dttttttttt")    
    this.getdata();
  })
 };
 getdata(){
   this.http.get("users/getdata").subscribe(
     dt=>{
      // this.data=JSON.parse(dt._body)
      console.log(dt,"datadb")
     }
   )
 }

}
