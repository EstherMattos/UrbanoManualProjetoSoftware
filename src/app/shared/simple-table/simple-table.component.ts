import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, AfterViewInit {

  public colunas
  public registros;

  constructor(@Inject(MAT_DIALOG_DATA) data,
              private dialogRef: MatDialogRef<SimpleTableComponent>) {

                this.colunas = data.colunas,
                this.registros = data.registros

              }

  ngAfterViewInit() {
    this.registros = new MatTableDataSource<any>(this.registros); 
  }


  ngOnInit(): void {

  }

  public filtrar(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.registros.filter = valor.trim().toLowerCase();

    if (this.registros.paginator) {
      this.registros.paginator.firstPage();
    }
  }

  public close(item): void{
    this.dialogRef.close(item)
  }

  public retornaColunas(){
    return this.colunas.map(v => v.valor)
  } 
}
