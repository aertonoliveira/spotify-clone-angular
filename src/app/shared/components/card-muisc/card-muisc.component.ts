import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-muisc',
  templateUrl: './card-muisc.component.html',
  styleUrls: ['./card-muisc.component.scss']
})
export class CardMuiscComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

  getItemById(id: string) {

  }

}
