import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css'
})
export class CardSectionComponent {
  @Input() img!: string;
  @Input() name!: string;
  @Input() description!: string;
}
