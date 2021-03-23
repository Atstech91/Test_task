import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  public randomize() {
    for (let i=0; i < this.barChartData.length; i++) {
      for (let j = 0; j < this.barChartData[i].data.length; j++) {
        this.barChartData[i].data[j] = Math.floor(Math.random() * 1000);
      }
      this.chart.chart.update();
    }

  }

}
