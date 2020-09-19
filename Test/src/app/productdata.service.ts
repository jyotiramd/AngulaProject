import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const api = "http://localhost:5556/product/";

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  
  saveData(data){
    return this.httpclient.post(api,data);
  }

  getData(){
    return this.httpclient.get(api); 
  }

  getDataById(id)
  {
    return this.httpclient.get(api+id);
  }
  

  updateData(id,data)
  {
    return this.httpclient.put(api+id,data);
  }

  deleteData(id){
    return this.httpclient.delete(api+id);
  }
  constructor(private httpclient:HttpClient) { }

}
