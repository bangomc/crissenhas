import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConstantesService } from '../service/constantes.service';

@Component({
  selector: 'app-chave',
  templateUrl: './chave.component.html',
  styleUrls: ['./chave.component.css']
})
export class ChaveComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'chave': new FormControl(null)
  });

  constructor(private router: Router, private constantesService: ConstantesService) { }

  ngOnInit(): void {
  }

  ok(): void {
    this.constantesService.setChaveAES(this.formulario.value.chave);
    this.router.navigate(['senhas']);
  }

  flip(componente){
    if('password' == componente.type){
      componente.type = 'text';
    }else{
      componente.type = 'password';
    }
  }

}
