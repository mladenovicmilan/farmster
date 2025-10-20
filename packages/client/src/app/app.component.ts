import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppStore } from './core/store';
import { isPlatformBrowser } from '@angular/common';
import { TestComponent } from './features/testcomponent/testcomponent.component';
import { FooterComponent, HeaderComponent } from './layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  appStore = inject(AppStore);
  private platformId = inject(PLATFORM_ID);
  title = 'client';

  ngOnInit() {
    console.log(isPlatformBrowser(this.platformId) ? '[Browser]' : '[Server]', this.appStore.theme());
    console.log('test');
  }
}

