import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  /**
   * visibleSidebar: Atributo para mostrar o no el sidebar
   * items: Array que contiene los elementos del menu
   */
  public visibleSidebar: boolean = false;
  public items: MenuItem[] = [];
  
  constructor(private authService: AuthService) {  }

  ngOnInit(): void {
    this.items = [
        {
          label: 'Usuario',
          icon:'pi pi-fw pi-user',
          items: [
            {
                label: this.authService.userAuth.name,
                icon:'pi pi-fw pi-user-plus',
            },
            {
                label: this.authService.userAuth.username,
                icon:'pi pi-fw pi-user-minus',
            },
          ]
        },
    ]
  }

  logout() {
    this.authService.logout();
  }
}
