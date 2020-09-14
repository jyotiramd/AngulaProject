import { Component, OnInit } from '@angular/core';
import { UserregdataService } from '../userregdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userregservice:UserregdataService) { }

  user:any = [];
  getUserRegData(){
    this.userregservice.getData().subscribe((res)=>{
      this.user=res;
    })
  }

  ngOnInit(): void {
    this.getUserRegData();
  }

}
