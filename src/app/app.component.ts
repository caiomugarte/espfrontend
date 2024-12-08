import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IndicadorAcessoComponent} from './indicador-acesso/indicador-acesso.component';

@Component({
  selector: 'app-root',
  imports: [IndicadorAcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'espfrontend';
}
