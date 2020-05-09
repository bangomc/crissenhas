import { Component, OnInit } from '@angular/core';
import { CriptoService } from '../service/cripto.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DelDialogTemplateComponent } from './del-dialog-template/del-dialog-template.component';
import { ItemSenha } from '../model/item-senha';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: ItemSenha[];

  constructor(public delDialog: MatDialog, private cripto: CriptoService) { }

  ngOnInit(): void {
   
  }

  flip(componente){
    if('password' == componente.type){
      componente.value = this.cripto.descriptografar(componente.value);
      componente.type = 'text';
    }else{
      componente.value = this.cripto.criptografar(componente.value);
      componente.type = 'password';
    }
  }

  excluir(chave: string){
    
  }

  showDialogDel(chave: string){
    let confDialog: MatDialogConfig = new MatDialogConfig();
    confDialog.data = {resposta: 'sim'};
    const delDialogRef = this.delDialog.open(DelDialogTemplateComponent,confDialog);

    delDialogRef.afterClosed().subscribe(result=>{
      if('sim'==result){
        this.excluir(chave);
      }
    });
  }

}
