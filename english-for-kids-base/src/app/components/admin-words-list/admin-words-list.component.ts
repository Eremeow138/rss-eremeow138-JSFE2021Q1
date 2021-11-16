import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models';
import { CardDataService } from 'src/app/services';

@Component({
  selector: 'app-admin-words-list',
  templateUrl: './admin-words-list.component.html',
  styleUrls: ['./admin-words-list.component.scss'],
})
export class AdminWordsListComponent implements OnInit {
  public category?: Category;

  constructor(
    private activateRoute: ActivatedRoute,
    private cardDataService: CardDataService,
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = +params.id;
      this.getCategory(id);
    });
  }

  private getCategory(id: number): void {
    this.cardDataService.getCategory(id).subscribe(category => {
      this.category = category;
    });
  }
}
