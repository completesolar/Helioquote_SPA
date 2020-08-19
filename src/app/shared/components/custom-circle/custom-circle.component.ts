import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-circle',
  templateUrl: './custom-circle.component.html',
  styleUrls: ['./custom-circle.component.scss']
})
export class CustomCircleComponent implements OnInit {
  @Input() textInfo: string;
  @Input() subtextInfo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
