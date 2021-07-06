import { Component, OnInit } from '@angular/core';
import { WordStatisticsForTable } from 'src/app/models';
import { StatisticsDataService } from 'src/app/services';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  statisticsOfAllWords: WordStatisticsForTable[] = [];

  constructor(private readonly statisticsDataService: StatisticsDataService) {}

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(): void {
    this.statisticsDataService.getStatistisForTable().subscribe(statistics => {
      this.statisticsOfAllWords = statistics;
    });
  }
}
