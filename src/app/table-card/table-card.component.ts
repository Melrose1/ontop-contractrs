import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css'],
})
export class TableCardComponent implements OnInit {
  listTd: string[] = [
    'Contractor name',
    'Type',
    'Start date',
    'Amount ',
    'Status',
    'Actions',
  ];
  listUsers: any[] = [
    {
      url: 'https://randomuser.me/api/portraits/men/1.jpg',
      contrator_name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Active',
      actions: true,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/2.jpg',
      contrator_name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Active',
      actions: true,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/3.jpg',
      contrator_name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Active',
      actions: true,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/4.jpg',
      contrator_name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Signature pending',
      actions: true,
    },
  ];
  formatList: any[] = [
    {
      title: 'Contractor name',
      data: 'Darlene Robertson',
    },
    {
      title: 'Type',
      data: 'Traditional',
    },
    {
      title: 'Start date',
      data: 'Mar 4, 2021',
    },
    {
      title: 'Amount',
      data: '$200 USD',
    },
    {
      title: 'Status',
      data: 'Active',
    },
    {
      title: 'Actions',
      data: true,
    },
  ];
  openMenu: boolean = false;
  userNumber: any;
  constructor() {}

  ngOnInit(): void {}

  openTheMenu(i: number) {
    this.userNumber = i;
    this.openMenu = !this.openMenu;
  }
}
