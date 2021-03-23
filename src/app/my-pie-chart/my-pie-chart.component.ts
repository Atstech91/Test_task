import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  public randomize() {
    for (let i=0; i < this.pieChartData.length; i++) {
        this.pieChartData[i] = Math.floor(Math.random() * 1000);
        }
        this.chart.chart.update();
    }

}
