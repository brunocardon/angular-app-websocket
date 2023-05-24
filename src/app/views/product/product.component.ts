import { Component, OnInit, Inject  } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(@Inject('APP_ENVIRONMENT') private environment: any) {}
  
  ngOnInit() {
    console.log("environment", this.environment)
    console.log("ProductComponent-_-teste")
  }

}