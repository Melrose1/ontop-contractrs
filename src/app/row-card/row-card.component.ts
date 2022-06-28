import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css'],
})
export class RowCardComponent implements OnInit {
  @Input() listTittle: any;
  @Input() i: any;

  constructor() {}

  ngOnInit(): void {}
}
