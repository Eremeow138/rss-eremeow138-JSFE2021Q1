import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services';

@Component({
  selector: 'app-star-field',
  templateUrl: './star-field.component.html',
  styleUrls: ['./star-field.component.scss'],
})
export class StarFieldComponent implements OnInit {
  constructor(private readonly gameService: GameService) {}

  public starLinks: string[] = [];

  ngOnInit(): void {
    this.gameService.getStarLinks().subscribe(freshStarLinks => {
      this.starLinks = freshStarLinks;
    });
  }
}
