import { Component, OnInit } from '@angular/core';
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
  // shops: any[] = [];

  // constructor(private shopService: ShopService) { }

  // ngOnInit(): void {
  //   this.getShopsList();
  // }

  // getShopsList() {
  //   this.shopService.getShops().subscribe(data => {
  //     this.shops = data;
  //     this.shops.forEach(shop => {
  //       this.shopService.getMenuByShop(shop.id).subscribe(menuData => {
  //         shop.menu = menuData;
  //       });
  //     });
  //   });
  // }

  // getMenus(shopId: string): void {
  //   // return this.stateService.getShopMenus(shopId)();
  // }

  // addToOrder(item: any) {
  //   // this.stateService.addToOrder(item);
  // }

  // placeOrder() {
  //   // this.stateService.placeOrder();
  // }


  shops$: Observable<any> = this.stateService.shops$;
  currentOrder$: Observable<any[]> = this.stateService.currentOrder$;

  constructor(private stateService: StateService) { }

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

}
