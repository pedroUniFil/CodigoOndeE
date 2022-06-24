import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Router } from '@angular/router'

@Component({
  selector: 'app-criar-festas',
  templateUrl: './criar-festas.page.html',
  styleUrls: ['./criar-festas.page.scss'],
})
export class CriarFestasPage implements OnInit {
  modes : ['date', 'date-time', 'month', 'month-year', 'time', 'time-date','year'];
  selectMode = 'date';
  showPicker = false;
  formattedString = '';
  
  constructor(private transi : Router) { }

  btCanc(){
    this.transi.navigate(['/home'])
  }

  btCV(){
    this.transi.navigate(['/home'])
  }

  btSPT(){
    this.transi.navigate(['/suporte'])
  }

  ngOnInit() {
  }

}
