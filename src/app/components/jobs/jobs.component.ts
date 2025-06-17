import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AfterViewInit,ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,ContactComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
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
export class JobsComponent implements AfterViewInit,OnInit{
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
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());

    this.initParticles(100);
    this.animate();
  }

  resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  initParticles(count: number): void {
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 1.9);
      this.ctx.fillStyle ='white';
      this.ctx.fill();
    });
  for (let i = 0; i < this.particles.length; i++) {
    for (let j = i + 1; j < this.particles.length; j++) {
      const p1 = this.particles[i];
      const p2 = this.particles[j];

      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

      }
    }
  }
}
}
