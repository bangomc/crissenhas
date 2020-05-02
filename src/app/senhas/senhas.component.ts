import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senhas',
  templateUrl: './senhas.component.html',
  styleUrls: ['./senhas.component.css']
})
export class SenhasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.router.navigate(['senhas/add']);
  }

}
