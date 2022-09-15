import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component';
import { CardDefaultComponent } from './card-default/card-default.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SimpleTableComponent } from './simple-table/simple-table.component';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule, 
  MatPaginatorModule,    
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatCheckboxModule  
]


@NgModule({
  declarations: [
    CrudButtonsComponent,
    CardDefaultComponent,
    SimpleTableComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    CrudButtonsComponent,
    CardDefaultComponent,
    SimpleTableComponent
  ]
})
export class SharedModule { }
