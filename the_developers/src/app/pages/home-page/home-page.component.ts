import { Component } from '@angular/core';
import { PresentationSectionComponent } from '../../components/presentation-section/presentation-section.component';
import { CardSectionComponent } from '../../components/card-section/card-section.component';
import { FindSectionComponent } from '../../components/find-section/find-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PresentationSectionComponent, CardSectionComponent, FindSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  developerList=[
    {img: "../../../assets/Rectangle 1.svg", name: "Josefine", description: "Lorem ipsum dolor sit amet"},
    {img: "../../../assets/Rectangle 2.svg", name: "Rudolph", description: "Lorem ipsum dolor sit amet"},
    {img: "../../../assets/Rectangle 3.svg", name: "Lucy", description: "Lorem ipsum dolor sit amet"},
    {img: "../../../assets/Rectangle 4.svg", name: "Robert", description: "Lorem ipsum dolor sit amet"},
  ]
}
