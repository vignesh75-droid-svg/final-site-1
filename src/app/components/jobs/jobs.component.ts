import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,ContactComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  services = [
    { title: "Competitive Wage", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job1.png" },
    { title: "Pet Friendly", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job2.png" },
    { title: "Parental Leave", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job3.jpg" },
    { title: "Health Insurance", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job4.png"},
    { title: "Flexible Hours", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job5.png" },
    { title: "401k/Retirement", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", icon: "job6.png" },
  ];
  newsList = [
    { 
      title: 'Senior DevOps Engineer', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'Junior Web Developer', 
      content: 'New investment received from global tech firms...',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'Intern', 
      content: 'We are honored to receive the Apple Design Award...',
      image: 'pixel.jpeg' 
    }
  ];

  paper = this.newsList[0];

  updateNews(newsItem: any) {
    this.paper = newsItem;
  }
}
