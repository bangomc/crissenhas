import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ConstantesService } from './constantes.service';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  constructor(private constantesService: ConstantesService) { }

  criptografar(valor: string): string {
    return CryptoJS.AES.encrypt(valor.trim(),this.constantesService.getChaveAES()).toString();
  }

  descriptografar(valor: string): string {
    return CryptoJS.AES.decrypt(valor.trim(),this.constantesService.getChaveAES()).toString(CryptoJS.enc.Utf8);
  }
}
