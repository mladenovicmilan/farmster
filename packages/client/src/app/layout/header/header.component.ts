
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppStore } from '../../core/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // RouterLink,
    // RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly appStore = inject(AppStore);

  toggleTheme() {
    const newTheme = this.appStore.theme() === 'light' ? 'dark' : 'light';
    this.appStore.setTheme(newTheme);
  }
}
