import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  @Input() order: any[] = [];
  @Output() placeOrder = new EventEmitter<void>();

  totalAmount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order']) {
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    this.totalAmount = this.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  submitOrder() {
    this.placeOrder.emit();
  }
}
