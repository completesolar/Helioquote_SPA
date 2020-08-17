import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-current-system-page',
  templateUrl: './current-system-page.component.html',
  styleUrls: ['./current-system-page.component.scss']
})
export class CurrentSystemPageComponent implements OnInit {
  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('utilityBillGraph');
    this.ctx = this.canvas.getContext('2d');
    const utilityBillGraph = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['1', '5', '10', '15', '20', '25'],
        datasets: [{
          label: 'Utility bill over 25 years',
          data: [2500, 3500, 4500, 5500, 6700, 8000],
          backgroundColor: 'rgb(107, 107, 107)',
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontSize: 25,
            boxWidth: 0
          }
        },
        responsive: true,
        display: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 2000
            }
          }]
        }
      }
    });
  }

}
