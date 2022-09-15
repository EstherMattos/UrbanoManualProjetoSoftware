import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ComodoComponent } from './comodo/comodo.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ContaComponent } from './conta/conta.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ForumComponent } from './forum/forum.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { ComponentsModule } from '../components/components.module';
import { TabelaContaComponent } from './conta/tabela-conta/tabela-conta.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CriarComodoComponent } from './comodo/criar-comodo/criar-comodo.component';
import { AdicionarComentarioComponent } from './forum/adicionar-comentario/adicionar-comentario.component';
import { CardComentarioComponent } from './forum/card-comentario/card-comentario.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    PagesComponent, 
    ComodoComponent, 
    EstoqueComponent, 
    ContaComponent, 
    CalculadoraComponent, 
    ForumComponent, 
    TutorialComponent, 
    UsuarioComponent, TabelaContaComponent, CriarComodoComponent, AdicionarComentarioComponent, CardComentarioComponent, PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    SharedModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule, 
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatTreeModule,
    MatSnackBarModule
  ],
  exports: [
    EstoqueComponent
  ]
})
export class PagesModule { }
