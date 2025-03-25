import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NewsComponent } from '../news/news.component';



@Component({
  selector: 'app-home',
  imports: [CommonModule,ContactComponent,AboutComponent,NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    { title: "App Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "image11.png" },
    { title: "Cloud Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images2.png" },
    { title: "Database Engineering", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images3.png" },
    { title: "Devlopment Operations", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images4.png" },
    { title: "Software Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "image5.png" },
    { title: "Web Development", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "images6.png" },
  ];
}
