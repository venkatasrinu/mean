import { Component,OnInit} from '@angular/core';
import { BuyService} from './buy.service';
import { SellService} from '../services/sell'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import { faCoffee } from '../../node_modules/@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  //faCoffee = faCoffee;
 uname="";
  data;
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
    //alert("coming")
    var ob={name:this.uname}
    //alert(ob.name)
 console.log("ob ", ob);


    this.http.post("users/ins",ob).subscribe(
      dt=>{     
         this.data=dt.json()
 console.log("data ", this.data);
  
       
localStorage.login = "yes";
      console.log(dt,"dttttttttt")    
      this.uname=""
    //this.getdata();
  })
 };
 
//  etdata(){
//    this.http.get("users/getdata").subscribe(
//      dt=>{

//       console.log(dt,"datadb")
//      }
//    )
//  }g
       // this.data=JSON.parse(dt._body)


}
