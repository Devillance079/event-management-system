import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar color="primary">
      <span>EventMaster</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/" routerLinkActive="active">Events</button>
      <button mat-button>Login</button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.1); }
  `]
})
export class Navbar {}