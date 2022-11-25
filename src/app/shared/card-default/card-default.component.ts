import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent implements OnInit {

  @Input('titulo') titulo;

  constructor() { }

  ngOnInit(): void {
  }

}
