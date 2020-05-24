import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { CnewsComponent } from './components/CRUD/cnews/cnews.component';
import { DnewsComponent } from './components/CRUD/dnews/dnews.component';
import { UnewsComponent } from './components/CRUD/unews/unews.component';
import { RnewsComponent } from './components/CRUD/rnews/rnews.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent},
  {path: 'cnews', component: CnewsComponent},
  {path: 'dnews', component: DnewsComponent},
  {path: 'unews', component: UnewsComponent},
  {path: 'rnews', component: RnewsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
