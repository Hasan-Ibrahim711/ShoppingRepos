import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  constructor(private route:Router) { }
  showOrders() {
    this.route.navigate(['/shopping/my-order'])
  }
}
