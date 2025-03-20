import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';;
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ShowreelComponent } from './components/showreel/showreel.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [ 
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'showreel',
    component:ShowreelComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
 { 
  path:'job',
  component:JobsComponent
},
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },      
];
