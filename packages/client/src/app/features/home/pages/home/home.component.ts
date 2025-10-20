import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layout';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [ MatButton ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
