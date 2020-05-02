import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChaveComponent } from './chave/chave.component';
import { MatCardModule }  from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListaComponent } from './lista/lista.component';
import { DelDialogTemplateComponent } from './lista/del-dialog-template/del-dialog-template.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SenhasComponent } from './senhas/senhas.component';
import { LstComponent } from './senhas/lst/lst.component';
import { AddComponent } from './senhas/add/add.component';
import { DelComponent } from './senhas/del/del.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChaveComponent,
    ListaComponent,
    DelDialogTemplateComponent,
    SenhasComponent,
    LstComponent,
    AddComponent,
    DelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
