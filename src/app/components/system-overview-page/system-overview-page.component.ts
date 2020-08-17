import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-system-overview-page',
  templateUrl: './system-overview-page.component.html',
  styleUrls: ['./system-overview-page.component.scss']
})
export class SystemOverviewPageComponent implements OnInit {
  selected = 2;

  defaultData = [
    {
      title: 'System Size',
      value: 'XXXX kW'
    },
    {
      title: 'Annual system production*',
      value: 'XXXX kWh'
    },
    {
      title: 'Annual usage',
      value: 'XXXX kWh'
    },
    {
      title: 'Offset',
      value: 'XXX %'
    },
    {
      title: 'Panels',
      value: '[xxxxxxxxxxxxxxxxx]'
    },
    {
      title: 'Inverters',
      value: '[xxxxxxxxxxxxxxxxx]'
    },
    {
      title: 'Batteries',
      value: '[xxxxxxxxxxxxxxxxx]'
    },
  ];

  proposals = [
    {
      value: 1,
      title: 'test'
    },
    {
      value: 2,
      title: 'test2'
    },
    {
      value: 3,
      title: 'test3'
    }
  ];

  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('solarProductionEnergyConsumptionGraph');
    this.ctx = this.canvas.getContext('2d');

    const solarProductionEnergyConsumptionGraph = new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Solar',
          data: [450, 500, 650, 1400, 1500, 1700, 1500, 1450, 1400, 650, 500, 450]
        }, {
          label: 'Utility',
          data: [1000, 900, 950, 900, 920, 930, 970, 945, 925, 900, 1050, 1000],
          type: 'line'
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      options: {}
    });
  }

}
