import { Component, OnInit, Inject  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  
  constructor(@Inject('APP_ENVIRONMENT') private environment: any) {}
  
  ngOnInit() {
    console.log("environment", this.environment)
    console.log("HomeComponent-_-teste")
  }

}
