import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';

import { CadastrarResidenciaComponent } from './cadastrar-residencia/cadastrar-residencia.component';
import { CadastrarRendaComponent } from './cadastrar-renda/cadastrar-renda.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContadorComponent,
    CadastrarResidenciaComponent,
    CadastrarRendaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [
    ContadorComponent,
    CadastrarResidenciaComponent,
    CadastrarRendaComponent
  ]
})
export class ComponentsModule { }
