import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path:"", component: DashboardComponent, pathMatch: "full"
  },
  {
    path:"participants", loadChildren: () => import ('./participants/participants.module').then(m => m.ParticipantsModule) 
  },
  {
    path: "**", redirectTo: ""
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 