import { Component, OnInit } from '@angular/core';
import {userregister} from './userregister';
import {FormGroup,FormControl} from '@angular/forms';
import { UserregdataService } from '../userregdata.service';
import {ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  form:FormGroup;
 
//userregister[]
 
  register()
  {
    console.log(this.form.value);
    //this.user.push(this.form.value);
    this.userregservice.saveData(this.form.value).subscribe((res)=>{
      alert("Data Saved Successfully...");
      this.router.navigateByUrl("/dashboard")
    })
  }
  constructor(private userregservice:UserregdataService,private router:Router) { }

  ngOnInit(): void {

    
    this.form = new FormGroup
    ({
        user_email:new FormControl(""),
        user_username:new FormControl(""),
        user_password:new FormControl(""),
        user_mobile:new FormControl("")
    })
  }

}
