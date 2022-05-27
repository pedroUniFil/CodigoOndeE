import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Convites', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Conversas', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Arquivados', url: '/folder/Archived', icon: 'archive' },
    { title: 'Lixeira', url: '/folder/Trash', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
