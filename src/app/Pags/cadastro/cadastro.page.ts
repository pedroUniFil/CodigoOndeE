import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  modes : ['date', 'month', 'month-year', 'year'];
  selectMode = 'date';
  showPicker = false;
  //dateValue = format(new Date(), 'yyyy-MM-dd' + 'T09:00:00.000Z');
  formattedString = '';

  constructor(private transi : Router) { 
    this.setToday();
  }

   setToday(){
    //this.formattedString = format(parseISO(format(new Date(),  'yyyy-MM-dd') + 'T09:00:00.000Z' ), 'HH:mm, MMM d, yyyy')
   }

   btCriar(){
    this.transi.navigate(['/criar-festas'])
   }

   btCanc(){
    this.transi.navigate(['/home'])
   }

  ngOnInit() {
  }

}

