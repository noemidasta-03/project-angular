import {Component, Injectable} from '@angular/core';
import {MatDrawer, MatDrawerContainer,MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthService} from '../../auth/auth.service';

@Injectable(
  {providedIn: 'root'}
)

@Component({
  selector: 'app-dashboard',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatToolbarModule,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private authService:AuthService) {
  }
  drawerOpened= false
  toggleSidebar(): void {
    this.drawerOpened = !this.drawerOpened;
  }

  onSubmit(){

  }
}
