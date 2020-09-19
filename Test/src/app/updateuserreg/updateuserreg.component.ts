import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { from } from 'rxjs';
import {UserregdataService} from '../userregdata.service'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-updateuserreg',
  templateUrl: './updateuserreg.component.html',
  styleUrls: ['./updateuserreg.component.css']
})
export class UpdateuserregComponent implements OnInit {
  form:FormGroup;
  user:any = [];
//userregister[]
 id:number
  update() 
  {
    console.log();
    //this.user.push(this.form.value);
    this.userregservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Data Updated Successfully...");
      this.router.navigateByUrl("/dashboard")
    })
  }
  constructor(private userregservice:UserregdataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe((param)=>{
      this.id = param["id"];
      //console.log(this.id);
 this.userregservice.getDataById(this.id).subscribe((data)=>{

  this.user = data;
  this.form = new FormGroup
    ({
        user_email:new FormControl(this.user.user_email),
        user_username:new FormControl(this.user.user_username),
        user_password:new FormControl(this.user.user_password),
        user_mobile:new FormControl(this.user.user_mobile)
    })
})

    })
    
    
  }

}
