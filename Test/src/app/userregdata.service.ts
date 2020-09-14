import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';

const api = "http://localhost:5555/userreg/";


@Injectable({
  providedIn: 'root'
})


export class UserregdataService {

  saveData(data){

    return this.httpclient.post(api,data)
  }

  getData(){
    return this.httpclient.get(api);
  }
  constructor(private httpclient:HttpClient) { }
}
