// state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private shopsSubject = new BehaviorSubject<any[]>([]);
  private currentOrderSubject = new BehaviorSubject<any[]>([]);
  private menus = new Map<string, BehaviorSubject<any[]>>();

  shops$ = this.shopsSubject.asObservable();
  currentOrder$ = this.currentOrderSubject.asObservable();

  constructor(private shopService: ShopService) { }

  fetchShops() {
    this.shopService.getShops().subscribe(shops => {
      this.shopsSubject.next(shops);
      shops.forEach(shop => {
        this.fetchMenu(shop.id);
      });
    });
  }

  fetchMenu(shopId: string) {
    this.shopService.getMenuByShop(shopId).subscribe(menu => {
      if (!this.menus.has(shopId)) {
        this.menus.set(shopId, new BehaviorSubject<any[]>(menu));
      } else {
        this.menus.get(shopId)!.next(menu);
      }
    });
  }

  getShopMenus(shopId: string): Observable<any[]> {
    return this.menus.get(shopId)!.asObservable();
  }

  addToOrder(item: any) {
    const currentOrder = this.currentOrderSubject.value;
    const existingItemIndex = currentOrder.findIndex(orderItem => orderItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedOrder = [...currentOrder];
      updatedOrder[existingItemIndex].quantity += 1;
      this.currentOrderSubject.next(updatedOrder);
    } else {
      this.currentOrderSubject.next([...currentOrder, { ...item, quantity: 1 }]);
    }
  }

  placeOrder() {
    this.shopService.placeOrder(this.currentOrderSubject.value).subscribe(response => {
      console.log('Order placed successfully', response);
      this.currentOrderSubject.next([]);
    });
  }
}
