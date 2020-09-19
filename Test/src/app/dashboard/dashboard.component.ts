import { Component, OnInit } from '@angular/core';
import { UserregdataService } from '../userregdata.service';
import {UpdateuserregComponent} from '../updateuserreg/updateuserreg.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userregservice:UserregdataService) { }

  user:any = [];

  delete(id){
    this.userregservice.deleteData(id).subscribe((res)=>{
      alert("Data Deleted Successully...");
      this.getUserRegData();
    })
  }
  getUserRegData(){
    this.userregservice.getData().subscribe((res)=>{
      this.user=res;
    })
  }

  ngOnInit(): void {
    this.getUserRegData();
  }

}
