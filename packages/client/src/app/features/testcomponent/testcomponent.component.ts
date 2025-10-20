import { Component, inject } from '@angular/core';
import { AppStore } from '../../core/store';

@Component({
  selector: 'app-testcomponent',
  standalone: true,
  imports: [],
  templateUrl: './testcomponent.component.html',
  styleUrl: './testcomponent.component.scss'
})
export class TestComponent {

  appStore = inject(AppStore);

  constructor() {
    console.log(this.appStore.theme());
  }
}
