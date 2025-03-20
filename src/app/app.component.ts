import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [ContactComponent,NewsComponent,JobsComponent,AboutComponent,PortfolioComponent,HomeComponent,ShowreelComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
