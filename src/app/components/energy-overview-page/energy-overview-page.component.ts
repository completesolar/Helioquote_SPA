import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-overview-page',
  templateUrl: './energy-overview-page.component.html',
  styleUrls: ['./energy-overview-page.component.scss']
})
export class EnergyOverviewPageComponent implements OnInit {
  selected = 2;

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

  defaultDataForPanels = [
    {
      titlePanel: 'Solar Payment',
      values: [
        {
          title: 'Monthly Solar Payment',
          utilityValue: '$[XX]',
          solarValue: '$[XX]'
        },
        {
          title: 'Monthly Utility Payment',
          utilityValue: '$[XX]',
          solarValue: '$[XX]'
        },
        {
          title: 'Initial Payment',
          utilityValue: '$[XX]',
          solarValue: '$[XX]'
        }
      ]
    },
    {
      titlePanel: 'Solar Product Terms',
      values: [
        {
          title: 'Contract Term',
          utilityValue: '',
          solarValue: '[XX] years'
        }
      ]
    },
    {
      titlePanel: 'Lifetime Savings & Comparison',
      values: [
        {
          title: 'Rate',
          utilityValue: '$[X.XXX] / kWh',
          solarValue: '$[X.XXX] / kWh'
        },
        {
          title: 'Estimated 30-year savings',
          utilityValue: '$0',
          solarValue: '$[XXX,XXX]'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
