import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-muisc',
  templateUrl: './card-muisc.component.html',
  styleUrls: ['./card-muisc.component.scss']
})
export class CardMuiscComponent implements OnInit {
  @Input() item: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getItemById(id: string) {
    this.router.navigate(['/app/album', id]);
  }

}
