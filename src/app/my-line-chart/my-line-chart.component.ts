import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData = [
    {data: [165, 109, 380, 680, 156, 155, 840], label: 'Series A'},
    {data: [628, 548, 540, 619, 386, 327, 754], label: 'Series B'},
    {data: [380, 280, 770, 90, 800, 270, 400], label: 'Series C', yAxisID: 'y-axis-1'}
  ];

  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [{id: 'y-axis-1',
                position: 'left',
                gridLines: {color: 'rgba(0,0,0,0.3)'},
                ticks: {fontColor: 'black'}
        }
      ]
    }
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) public chart: BaseChartDirective;

  public randomize() {
    for (let i=0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = Math.floor(Math.random() * 1000);
      }
      this.chart.chart.update();
    }

  }

}
