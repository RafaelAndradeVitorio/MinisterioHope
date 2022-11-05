import { PROMOTIONS } from './../shered/promotions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(){
    return PROMOTIONS
  }

  getPromotion( id: string){
    return PROMOTIONS.filter((promo) => promo.id === id) [0];
  }
  getPromotionDestaque(){
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}
