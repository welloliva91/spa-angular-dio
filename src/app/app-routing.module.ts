import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './institutional/about/about.component';
import { ContactComponent } from './institutional/contact/contact.component';
import { HomeComponent } from './navigation/home/home.component';


const routes: Routes = [
  { path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { path: 'home', 
    component: HomeComponent 
  },
  { path: 'contato', 
    component: ContactComponent 
  },
  { path: 'sobre', 
    component: AboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
