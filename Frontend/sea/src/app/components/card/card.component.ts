import { Component, Input } from '@angular/core';

interface Card {
  title: string,
  subTitle: string,
}

@Component({
    selector: 'ng-app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Card; 
}
