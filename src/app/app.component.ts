import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: '/folder/Home', icon: 'planet' },
    { title: 'Convites', url: '/folder/Convites', icon: 'mail' },
    { title: 'Conversas', url: '/folder/Conversas', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Arquivados', url: '/folder/Arquivados', icon: 'archive' },
    { title: 'Lixeira', url: '/folder/Lixeira', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
