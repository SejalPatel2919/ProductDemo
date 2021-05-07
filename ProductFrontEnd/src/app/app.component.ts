import { Component } from '@angular/core';
import {ServiceService} from './service.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductFrontEnd';

  constructor(private ServiceService: ServiceService) { }  
  data: any;  
  ProductForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  
  
  ngOnInit(): void {  
    this.getdata();  
  
    this.ProductForm = new FormGroup({  
      productId: new FormControl(null),  
      productName: new FormControl("",[Validators.required]),        
      productDescription: new FormControl("",[Validators.required]),  
      productPrice:new FormControl("",[Validators.required]),  
      productQuantity: new FormControl("",[Validators.required]),  
    })    
  }  
  getdata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;  
    })  
  }  
  deleteData(id) {  
    this.ServiceService.deleteData(id).subscribe((data: any[]) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    this.submitted = true;  
    
     if (this.ProductForm.invalid) {  
            return;  
     }  
    this.ServiceService.postData(this.ProductForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.ProductForm.invalid) {  
     return;  
    }        
    this.ServiceService.putData(this.ProductForm.value.productId,this.ProductForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data) {  
    this.ProductForm.controls["productId"].setValue(Data.productId);  
    this.ProductForm.controls["productName"].setValue(Data.productName);      
    this.ProductForm.controls["productDescription"].setValue(Data.productDescription);  
    this.ProductForm.controls["productPrice"].setValue(Data.productPrice);  
    this.ProductForm.controls["productQuantity"].setValue(Data.productQuantity);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.ProductForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }  
}
