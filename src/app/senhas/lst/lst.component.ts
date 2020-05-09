import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DelDialogTemplateComponent } from 'src/app/lista/del-dialog-template/del-dialog-template.component';
import { ItemSenha } from 'src/app/model/item-senha';
import { CriptoService } from 'src/app/service/cripto.service';
import { DbService } from 'src/app/service/db.service';
import { Router } from '@angular/router';
import { ConstantesService } from 'src/app/service/constantes.service';

@Component({
  selector: 'app-lst',
  templateUrl: './lst.component.html',
  styleUrls: ['./lst.component.css']
})
export class LstComponent implements OnInit {

  lista: ItemSenha[];

  constructor(public delDialog: MatDialog, 
    private cripto: CriptoService, 
    private db: DbService, 
    private router: Router, 
    private constantesService: ConstantesService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.db.getAll()
      .then(items=>{
        this.lista = items;
      },error=>{
        console.log(error);
      });
  }

  flip(componente,itemId){
    if('password' == componente.type){
      if(!this.constantesService.getChaveAES()){
        this.router.navigate([""]);
      }  
      componente.value = this.cripto.descriptografar(componente.value);
      componente.type = 'text';
    }else{
      this.db.get(itemId)
        .then(item=>{
          componente.value = item.userPass;
          componente.type = 'password';
        },error=>{
          console.log(error);
        });
    }
  }

  excluir(itemId){
    this.db.del(itemId)
      .then(()=>{
        this.listar();
      },error=>{
        console.log(error);
      });
  }

  showDialogDel(itemId){
    let confDialog: MatDialogConfig = new MatDialogConfig();
    confDialog.data = {resposta: 'sim'};
    const delDialogRef = this.delDialog.open(DelDialogTemplateComponent,confDialog);

    delDialogRef.afterClosed().subscribe(result=>{
      if('sim'==result){
        this.excluir(itemId);
      }
    });
  }

}
