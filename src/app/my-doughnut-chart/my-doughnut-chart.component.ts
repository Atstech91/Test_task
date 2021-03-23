import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4',];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  public randomize() {
    for (let i=0; i < this.doughnutChartData.length; i++) {
        this.doughnutChartData[i] = Math.floor(Math.random() * 1000);
        }
        this.chart.chart.update();
    }

}
