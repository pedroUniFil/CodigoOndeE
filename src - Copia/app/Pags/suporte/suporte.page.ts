import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {

  constructor(private transi : Router) { }

  btCanc(){
    this.transi.navigate(['/home'])
  }

  btEnviar(){
    this.transi.navigate(['/home'])
  }

  ngOnInit() {
  }

}
