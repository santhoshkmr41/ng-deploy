import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() menu: any[] = [];
  @Output() addItem = new EventEmitter<any>();

  addToOrder(item: any) {
    this.addItem.emit(item);
  }
}
