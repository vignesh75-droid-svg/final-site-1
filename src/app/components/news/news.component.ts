import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  imports: [CommonModule,FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  animations: [
    trigger('shutter', [
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1
      })),
      transition('closed <=> open', [
        animate('350ms ease-in-out')
      ])
    ])
  ]
})
export class NewsComponent implements OnInit{
  newsList = [
    { 
      title: 'Product Launch Q1 2019', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibusLorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'New Investor', 
      content: 'New investment received from global tech firms...consectetur adipiscing elit Loremconsectetur adipiscing elit Loremconsectetur adipiscing el',
      image: 'pixel.jpeg' 
    },
    { 
      title: 'Apple Design Awards', 
      content: 'We are honored to receive the Apple Design Award...consectetur adipiscing elit Loremconsectetur adipiscing elit Loremconsectetur adipiscing ',
      image: 'pixel.jpeg' 
    }
  ];

  paper = { title: '', content: '',image:''};
  isOpen = false;

  ngOnInit(): void {
    this.paper=this.newsList[0];
    this.isOpen=true;
  }
  updateNews(newsItem: any) {
    this.paper = newsItem;
    this.isOpen = false;
  
    setTimeout(() => {
      this.isOpen = true;
    }, 300);
  }
}

