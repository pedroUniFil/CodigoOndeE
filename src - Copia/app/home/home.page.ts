import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
constructor(private transi : Router) {}

BtCadastro(){
  this.transi.navigate(['/cadastro'])
}
btLogin(){
  this.transi.navigate(['/login'])
}



}
