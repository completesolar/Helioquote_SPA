import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-cashflow-page',
  templateUrl: './cashflow-page.component.html',
  styleUrls: ['./cashflow-page.component.scss']
})
export class CashflowPageComponent implements OnInit {
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

  cashflowTableData = [
    {
      year: 1,
      oldUtilityBill: '0',
      newUtilityBill: '0',
      solarBill: '2000',
      incentives: '0',
      yearlySavings: '-2000',
      cumulativeSavings: '-2000'
    },
    {
      year: 2,
      oldUtilityBill: '3326',
      newUtilityBill: '140',
      solarBill: '1970',
      incentives: '7522',
      yearlySavings: '8738',
      cumulativeSavings: '6738'
    },
    {
      year: 3,
      oldUtilityBill: '3459',
      newUtilityBill: '145',
      solarBill: '9492',
      incentives: '0',
      yearlySavings: '-6178',
      cumulativeSavings: '560'
    },
    {
      year: 4,
      oldUtilityBill: '3597',
      newUtilityBill: '151',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '1614',
      cumulativeSavings: '3650'
    },
    {
      year: 5,
      oldUtilityBill: '3741',
      newUtilityBill: '157',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '1757',
      cumulativeSavings: '3650'
    },
    {
      year: 6,
      oldUtilityBill: '3890',
      newUtilityBill: '163',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '1907',
      cumulativeSavings: '5408'
    },
    {
      year: 7,
      oldUtilityBill: '4046',
      newUtilityBill: '170',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2062',
      cumulativeSavings: '7314'
    },
    {
      year: 8,
      oldUtilityBill: '4208',
      newUtilityBill: '177',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2223',
      cumulativeSavings: '9376'
    },
    {
      year: 9,
      oldUtilityBill: '4376',
      newUtilityBill: '184',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2391',
      cumulativeSavings: '11599'
    },
    {
      year: 10,
      oldUtilityBill: '4551',
      newUtilityBill: '191',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2565',
      cumulativeSavings: '13989'
    },
    {
      year: 11,
      oldUtilityBill: '4733',
      newUtilityBill: '199',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2746',
      cumulativeSavings: '16554'
    },
    {
      year: 12,
      oldUtilityBill: '4923',
      newUtilityBill: '207',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '2935',
      cumulativeSavings: '19301'
    },
    {
      year: 13,
      oldUtilityBill: '5120',
      newUtilityBill: '215',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '5101',
      cumulativeSavings: '22236'
    },
    {
      year: 14,
      oldUtilityBill: '5324',
      newUtilityBill: '224',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '5305',
      cumulativeSavings: '27336'
    },
    {
      year: 15,
      oldUtilityBill: '5537',
      newUtilityBill: '233',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '5517',
      cumulativeSavings: '32641'
    },
    {
      year: 16,
      oldUtilityBill: '5759',
      newUtilityBill: '242',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '5738',
      cumulativeSavings: '38158'
    },
    {
      year: 17,
      oldUtilityBill: '5989',
      newUtilityBill: '252',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '5967',
      cumulativeSavings: '43896'
    },
    {
      year: 18,
      oldUtilityBill: '6229',
      newUtilityBill: '262',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '6206',
      cumulativeSavings: '49863'
    },
    {
      year: 19,
      oldUtilityBill: '6478',
      newUtilityBill: '272',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '6606',
      cumulativeSavings: '56069'
    },
    {
      year: 20,
      oldUtilityBill: '6624',
      newUtilityBill: '282',
      solarBill: '1970',
      incentives: '0',
      yearlySavings: '7020',
      cumulativeSavings: '60010'
    },
  ];

  cashflowDisplayedColumns = ['year', 'oldUtilityBill', 'newUtilityBill', 'solarBill', 'incentives', 'yearlySavings', 'cumulativeSavings'];

  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('annualSavingsGraph');
    this.ctx = this.canvas.getContext('2d');

    const annualSavingsGraph = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Utility',
            data: [0, 3459, 3741, 4046, 4376, 4733, 5120, 5537, 5989, 6478]
          },
          {
            label: 'Loan',
            data: [0, 3459, 3741, 4046, 4376, 4733, 5120, 0, 0, 0]
          },
          {
            label: 'Loan Plus Utility',
            data: [0, 3459, 3741, 4046, 4376, 4733, 5120, 3200, 0, 0]
          },
        ],
        labels: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19']
      },
      options: {}
    });
  }

}
