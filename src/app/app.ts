import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePai } from './components/componente-pai/componente-pai';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentePai], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected componenteFilho = 'wodclock';
}
