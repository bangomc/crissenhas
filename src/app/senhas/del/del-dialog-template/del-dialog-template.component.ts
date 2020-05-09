import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RespostaDialog } from 'src/app/model/resposta-dialog';

@Component({
  selector: 'app-del-dialog-template',
  templateUrl: './del-dialog-template.component.html',
  styleUrls: ['./del-dialog-template.component.css']
})
export class DelDialogTemplateComponent {

  constructor(public dialogRef: MatDialogRef<DelDialogTemplateComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: RespostaDialog) { }

  onNaoClick(){
    this.dialogRef.close();
  }

}
