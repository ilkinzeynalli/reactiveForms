import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidators } from '../validators/image.valdiators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    price: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    imageUrl: new FormControl('',[Validators.required,ImageValidators.isValidExtension])
  });

  get name(){
    return this.productForm.get('name');
  }

  get price(){
    return this.productForm.get('price');
  }

  get description(){
    return this.productForm.get('description');
  }

  get imageUrl(){
    return this.productForm.get('imageUrl');
  }

  onSubmit(){
    console.log(this.productForm.value);
  }

  updateProduct(){
    this.productForm.patchValue({name:"deneme",price: '1200',description: "desc 2"})
  }
}
