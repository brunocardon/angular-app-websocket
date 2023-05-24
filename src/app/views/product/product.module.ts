import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRouting } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ProductRouting,
    CommonModule
  ]
})
export class ProductModule { }
