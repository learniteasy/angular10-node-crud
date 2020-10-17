import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

interface Brand {
  name: string;
  value: string;
}

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = {
    name: '',
    description: '',
    available: false,
    brand: '',
  };
  submitted = false;

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Brand[] = [
    {name: 'Apple', value: 'apple!'},
    {name: 'Samsung', value: 'samsung!'},
    {name: 'LG', value: 'lg'},
    {name: 'Motorola', value: 'motorola'},
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      available: this.product.available,
      brand:this.product.brand,
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      available: false,
      brand : '',
    };
  }

}