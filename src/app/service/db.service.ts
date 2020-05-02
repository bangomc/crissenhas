import { Injectable } from '@angular/core';
import { ItemSenha } from '../model/item-senha';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private senhas: ItemSenha[] = new Array();
  private db: IDBDatabase;


  constructor() { }

  iniciar(){
    let request: IDBOpenDBRequest = indexedDB.open('crissenhasdb');
    request.onsuccess = (event: Event)=>{
      this.db = (<IDBOpenDBRequest>event.target).result;
    }
    request.onerror = (event: Event)=>{
      console.log('IndexedDB service: ' + (<IDBOpenDBRequest>event.target).error.name);
    }
  }

  private getObjectStore(storeName: string) {
    let tx: IDBTransaction = this.db.transaction(storeName, "readwrite");
    return tx.objectStore(storeName);
  }

  add(item: ItemSenha): void {
    let store: IDBObjectStore = this.getObjectStore("itemsenha");
    //let request: IDBOpenDBRequest = store.add(item,{});
    
    this.senhas.push(item);
  }

  getAll(): ItemSenha[] {
    if(this.senhas.length==0){
      let item01 = new ItemSenha('01','Santander','www.santander.com.br','Cartao de credito','cris','U2FsdGVkX1+rqNWJYLyI1E7tvSyB5ym6kc3HWxb2oeo=');
      let item02 = new ItemSenha('02','Bradesco','www.santander.com.br','Cartao de credito','cris','U2FsdGVkX1+rqNWJYLyI1E7tvSyB5ym6kc3HWxb2oeo=');
      let item03 = new ItemSenha('03','NetFlix','','','','U2FsdGVkX1+rqNWJYLyI1E7tvSyB5ym6kc3HWxb2oeo=');
      this.senhas.push(item01);
      this.senhas.push(item02);
      this.senhas.push(item03);
    }
    return this.senhas;
  }

}
