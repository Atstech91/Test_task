import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  public randomize() {
    for (let i=0; i < this.radarChartData.length; i++) {
      for (let j = 0; j < this.radarChartData[i].data.length; j++) {
        this.radarChartData[i].data[j] = Math.floor(Math.random() * 1000);
      }
      this.chart.chart.update();
    }

  }

}
