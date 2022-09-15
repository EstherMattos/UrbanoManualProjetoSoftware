import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {

  @Input("labelBotaoPost") labelBotaoPost: string; 
  @Input("labelBotaoPut") labelBotaoPut: string; 
  @Input("labelBotaoAuxUm") labelBotaoAuxUm: string;

  @Input("disablePost") disablePost: boolean = false;
  @Input("disablePut") disablePut: boolean = false;
  @Input("disableDelete") disableDelete: boolean = false;
  @Input("disableAuxUm") disableAuxUm: boolean = false;

  @Input("showPost") showPost: boolean = true;
  @Input("showPut") showPut: boolean = true;
  @Input("showDelete") showDelete: boolean = true;
  @Input("showAuxUm") showAuxUm: boolean = true;

  @Output() OnClickButtonPost = new EventEmitter();
  @Output() OnClickButtonPut = new EventEmitter();
  @Output() OnClickButtonDelete = new EventEmitter();
  @Output() OnClickButtonAuxUm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
    
  public emitClickButtonPost(event): void{
    this.OnClickButtonPost.emit(event)
  }

  public emitClickButtonPut(event): void{
    this.OnClickButtonPut.emit(event)
  }

  public emitClickButtonDelete(event): void{
    this.OnClickButtonDelete.emit(event)
  }

  public emitClickButtonAuxUm(event): void{
    this.OnClickButtonAuxUm.emit(event)
  }

}
