import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get('/api/Product');  //https://localhost:44352/ webapi host url  
  }  
  postData(formData){  
    return this.http.post('/api/Product',formData);  
  }  
  
  putData(id,formData){  
    return this.http.put('/api/Product/'+id,formData);  
  }  
  deleteData(id){  
    return this.http.delete('/api/Product/'+id);  
  }  
    
}  