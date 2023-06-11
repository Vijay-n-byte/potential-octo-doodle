import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleserviceService } from 'src/app/services/sampleservice.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {
  constructor(private f:Router,private g:SampleserviceService){}

  r:any;
  ngOnInit(): void {
    this.g.getcart().subscribe(n=>{
      if(n!=null){
        this.r=n;
      }
    }
     );
    
  }
  

  backtohome(){
    this.f.navigate(['customerhome/productsbuypage']);
  }

}
