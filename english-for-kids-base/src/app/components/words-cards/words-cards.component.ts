import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDataService } from 'src/app/services';
import { Category } from 'src/app/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-words-cards',
  templateUrl: './words-cards.component.html',
  styleUrls: ['./words-cards.component.scss'],
})
export class WordsCardsComponent {
  category?: Category;

  subscriptionOnChangingRouteParam: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private cardDataService: CardDataService,
  ) {
    this.subscriptionOnChangingRouteParam = activateRoute.params.subscribe(
      params => {
        this.getCategory(params.id);
      },
    );
  }

  getCategory(id: number): void {
    this.cardDataService.getCategory(id).subscribe(category => {
      this.category = category;
    });
  }
}
