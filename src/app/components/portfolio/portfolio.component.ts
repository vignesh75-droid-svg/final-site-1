import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule,ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  services = [
    { title: "App Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "image11.png" },
    { title: "Cloud Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images2.png" },
    { title: "Database Engineering", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images3.png" },
    { title: "Devlopment Operation", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images4.png" },
    { title: "Software Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "image5.png" },
    { title: "Web Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images6.png" },
  ];
}
