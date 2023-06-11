import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from '../services/sampleservice.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor(private g:SampleserviceService,private k1:Router){}

  public k:any;
  public kk:any;
  public v:any;
  public k11:number;
  public pages:number;
  // public chan:any;
  ngOnInit(): void {

     this.g.getproductsdetails().subscribe(m=>{
      if(m!=null){
        this.k=m;
        this.v=m;
        // this.k=this.kk.slice(0,2);
        this.k11=this.v.length;
      }
     }
     );
  }
  sendtologin(){
    // this.k1.navigate(['adminlogin']);
    this.k1.navigate(['customerlogin']);
  }
  sample(u){
    if(u.value.fooditem===''){
      this.k=this.v;
    }
    else{
    this.k=this.v;
    let gf:String=u.value.fooditem;
    let gff=gf.toLowerCase();
    this.k=this.k.filter(function(b){
      return b.productname===gff;
    }).map(function(c){
      return c;
    })
  }


  }
}
