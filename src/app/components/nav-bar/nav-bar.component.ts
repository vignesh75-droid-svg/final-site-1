import { CommonModule } from '@angular/common';
import { AfterViewInit, Component,HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterViewInit{
  navbar: HTMLElement | null = null;

  ngAfterViewInit() {
    this.navbar = document.getElementById('navbar');
    if (this.navbar) {
      this.navbar.style.transition = 'background-color 0.4s ease';
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.navbar) return;

    if (window.scrollY > 700) {
      this.navbar.style.backgroundColor = 'blue';
    } else {
      this.navbar.style.backgroundColor = 'transparent';
    }
  }
}
