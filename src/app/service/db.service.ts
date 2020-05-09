import { Injectable } from '@angular/core';
import { ItemSenha } from '../model/item-senha';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ConstantesService } from './constantes.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private ngxIndexedDBService: NgxIndexedDBService, private constantesService: ConstantesService){
  }

  add(item: ItemSenha): void {9
    this.ngxIndexedDBService.add(this.constantesService.getTabelaItemSenha(),item)
      .then(()=>{

      },error => {
        console.log(error);
      });    
  }

  del(itemId): Promise<ItemSenha> {
    return this.ngxIndexedDBService.delete(this.constantesService.getTabelaItemSenha(),itemId);
  }

  getAll(): Promise<ItemSenha[]> {
    return this.ngxIndexedDBService.getAll(this.constantesService.getTabelaItemSenha());
  }

  get(idItem): Promise<ItemSenha> {
    return this.ngxIndexedDBService.getByKey(this.constantesService.getTabelaItemSenha(),idItem);
  }

}
