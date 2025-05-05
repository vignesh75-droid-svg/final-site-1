import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsList = [
    { 
      title: 'Product Launch Q1 2019', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'New Investor', 
      content: 'New investment received from global tech firms...',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'Apple Design Awards', 
      content: 'We are honored to receive the Apple Design Award...',
      image: 'pixel.jpeg' 
    }
  ];

  paper = this.newsList[0];

  updateNews(newsItem: any) {
    this.paper = newsItem;
  }
}

