import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule,

    ComponentsModule,

    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    PipesModule
  ]
})
export class CadastroModule { }
