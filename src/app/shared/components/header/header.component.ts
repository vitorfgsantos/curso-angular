import { Component, Input, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent {

  @Input() titulo: string;

  constructor(
    private authService: AuthService,
  ) {}

  estaLogado() {
    return this.authService.estaLogado();
  }

  logout() {
    this.authService.logout();
  }

}
