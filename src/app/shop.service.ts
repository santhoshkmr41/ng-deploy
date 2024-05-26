import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopsUrl = 'https://api.example.com/shops';
  private menusUrl = 'https://api.example.com/menus'; // Assuming menus endpoint
  private orderUrl = 'https://api.example.com/orders'; // Assuming orders endpoint

  // shopsList: any[] = [
  //   { id: 1, name: 'Shop1' },
  //   { id: 2, name: 'Suji' },
  // ];

  shopsList: any[] = Array.from({ length: 10 }, (v, k) => { return { id: (k + 1), name: 'Shop ' + (k + 1) } });

  menusList: any[] = [
    { id: 1, name: 'vennila', price: 100 },
    { id: 2, name: 'Chocalare', price: 50 },
    { id: 3, name: 'Stawbery', price: 110 },
    { id: 4, name: 'Pista', price: 300 },
    { id: 5, name: 'Chaco Vennila', price: 250 }
  ];

  constructor(private http: HttpClient) { }

  getShops(): Observable<any[]> {
    // return this.http.get<any[]>(this.shopsUrl);
    return of(this.shopsList).pipe(delay(100));
  }

  getMenuByShop(shopId: string): Observable<any[]> {
    // return this.http.get<any[]>(`${this.menusUrl}?shopId=${shopId}`);
    return of(this.menusList).pipe(delay(500));
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(this.orderUrl, order);
  }
}
