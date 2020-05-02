import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  private chaveAES: string = null;

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
}
