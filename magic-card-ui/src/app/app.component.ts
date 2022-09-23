import { Component } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MagicCard';
  currentRoute = '';
  constructor(private router:Router){
    
  }

  // navigate(action: string){
  //   this.currentRoute =action.toLocaleLowerCase();
  //   if(action.toLocaleLowerCase() === "list")
  //     this.router.navigateByUrl("participants/list",{ skipLocationChange: true })
  //   else if(action.toLocaleLowerCase() === "register")
  //     this.router.navigateByUrl("participants/register", { skipLocationChange: true })
  // }
}
