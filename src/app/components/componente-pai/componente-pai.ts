import { Component } from '@angular/core';
import { ComponenteFilho } from './componente-filho/componente-filho';

@Component({
  selector: 'app-componente-pai',
  imports: [ComponenteFilho],
  templateUrl: './componente-pai.html',
  styleUrl: './componente-pai.scss',
})
export class ComponentePai {

}
