import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  isContactPage(): boolean {
    return this.router.url === '/contact';
  }
}
