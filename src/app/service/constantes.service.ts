import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  private chaveAES: string = null;
  private tabelaItemSenha: string = "itemsenha";

  constructor() { }

  setChaveAES(chave: string): void {
    this.chaveAES = chave;
    setTimeout(() => {
      this.chaveAES = null;
    }, 10000);
  }

  getChaveAES(): string {
    return this.chaveAES;
  }

  getTabelaItemSenha(): string {
    return this.tabelaItemSenha;
  }
}
