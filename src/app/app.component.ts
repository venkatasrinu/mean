import { Component } from '@angular/core';
import { BuyService} from './buy.service';
import { SellService} from '../services/sell'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';

//import {map} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  //title = "welcome to angular and node"
  //sri = false;
 // today;
// httpdata;
 // months = ["jan","feb","mar","april","may","june","july"];
 // jsonval = {name:"srinu",age:"25",mobile :{m1:"7799",m2:"5151"}}
  constructor (private myservice :BuyService,private sellsel :SellService,private http :Http){}
  uname;
  ngOnInit()  {
    
    // this.myservice.sampleService();
    //  this.today = this.sellsel.showdate()
     console.log("in the call")

     this.http.get("/getname").subscribe(data=>{
       console.log("data",data)
     })

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // map((Response)=> Response.json()).
    //  subscribe((data =>console.log(data)))
  }
  // clickbutton(){
  //   alert("hello button working")
  //   this.sri = true;
  // };
// changemonth(event){
//   alert("month changed ");
//   alert(event.type);
//   this.sri = false;
//   console.log(event)
// }

 //displaydata(data) {this.httpdata =data}
  //===================//
  funins(){
    var ob={name:this.uname}
    alert(ob.name)
    this.http.post("/users/ins",ob).subscribe(
      dt=>{      
      console.log(dt,"dttttttttt")
    
    
  })
}

}
