import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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

}
