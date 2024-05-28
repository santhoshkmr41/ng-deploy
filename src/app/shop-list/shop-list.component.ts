import { Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopService } from '../shop.service';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { Observable } from 'rxjs';
import { StateService } from '../state.service';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, MenuListComponent, OrderListComponent],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.scss'
})
export class ShopListComponent implements OnInit {
  shops$: Observable<any> = this.stateService.shops$;
  currentOrder$: Observable<any[]> = this.stateService.currentOrder$;

  selectedShop = signal({ id: '', name: null });

  constructor(public stateService: StateService) {
    effect(() => {
      console.log('Count changed', this.selectedShop());
    });
  }

  ngOnInit(): void {
    this.stateService.fetchShops();
  }

  getMenus(shopId: string): Observable<any[]> {
    return this.stateService.getShopMenus(shopId);
  }

  addToOrder(item: any) {
    this.stateService.addToOrder(item);
  }

  placeOrder() {
    this.stateService.placeOrder();
  }


  expandShopMenus(shop: any) {
    this.selectedShop.set(shop);
  }

}
