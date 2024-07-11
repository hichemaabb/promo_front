import {Component, OnInit} from '@angular/core';
import {PromotionService} from "./promotion.service";
import {PromotionResponse} from "./promotionResponse";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit{

  promos: PromotionResponse[] = []

  constructor(private promotionService: PromotionService) {
  }
    ngOnInit(): void {
      this.promotionService.getPromotions()
        .subscribe((value) => {
          this.promos = value
        })
    }

}
