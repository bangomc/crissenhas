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
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SenhasComponent } from './senhas/senhas.component';
import { LstComponent } from './senhas/lst/lst.component';
import { AddComponent } from './senhas/add/add.component';
import { DelComponent } from './senhas/del/del.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { DelDialogTemplateComponent } from './senhas/del/del-dialog-template/del-dialog-template.component';

const dbConfig: DBConfig  = {
  name: 'crissenhasdb',
  version: 1,
  objectStoresMeta: [{
    store: 'itemsenha',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'nome', keypath: 'nome', options: { unique: false } },
      { name: 'endereco', keypath: 'endereco', options: { unique: false } },
      { name: 'descricao', keypath: 'descricao', options: { unique: false } },
      { name: 'userName', keypath: 'userName', options: { unique: false } },
      { name: 'userPass', keypath: 'userPass', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    ChaveComponent,
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
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
