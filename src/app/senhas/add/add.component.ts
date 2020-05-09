import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CriptoService } from 'src/app/service/cripto.service';
import { ItemSenha } from 'src/app/model/item-senha';
import { Router } from '@angular/router';
import { DbService } from 'src/app/service/db.service';
import { ConstantesService } from 'src/app/service/constantes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'itemSenhaNome': new FormControl(null),
    'itemSenhaDescricao': new FormControl(null),
    'itemSenhaEndereco': new FormControl(null),
    'itemSenhaUser': new FormControl(null),
    'itemSenhaPass': new FormControl(null)
  });

  private chaveEAS: string;

  constructor(private cripto: CriptoService, private router: Router, private db: DbService, private constantesService: ConstantesService) { }

  ngOnInit() {
    this.chaveEAS = this.constantesService.getChaveAES();
    if(!this.chaveEAS){
      this.router.navigate([""]);
    }
  }

  adicionar(){
    if(null !== this.formulario.value.itemSenhaPass){
      this.constantesService.setChaveAES(this.chaveEAS);
      let senha = this.cripto.criptografar(this.formulario.value.itemSenhaPass);
      let itemSenha: ItemSenha = new ItemSenha(
        this.formulario.value.itemSenhaNome,
        this.formulario.value.itemSenhaEndereco,
        this.formulario.value.itemSenhaDescricao,
        this.formulario.value.itemSenhaUser,
        senha
      );
      this.db.add(itemSenha);
      this.cancelar();
    }
  }

  cancelar(): void {
    this.formulario.reset();
    this.router.navigate(['senhas']);
  }

}
