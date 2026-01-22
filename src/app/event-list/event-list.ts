import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { EventService } from '../services/event';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, RouterLink],
  template: `
    <div class="container">
      <h2>Upcoming Events</h2>
      <div class="grid">
        <mat-card *ngFor="let event of events" class="event-card">
          <img mat-card-image [src]="event.imageUrl" alt="Event image">
          <mat-card-header>
            <mat-card-title>{{ event.title }}</mat-card-title>
            <mat-card-subtitle>{{ event.date | date }} | {{ event.location }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ event.description }}</p>
            <mat-chip-listbox>
                <mat-chip>{{ event.category }}</mat-chip>
                <mat-chip color="accent" selected>{{ event.price | currency:'INR' }}</mat-chip>
            </mat-chip-listbox>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" [routerLink]="['/event', event.id]">View Details</button>
            <button *ngIf="event.availableTickets === 0" mat-button disabled>Sold Out</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
    .event-card { margin-bottom: 20px; }
    mat-card-content { margin-top: 10px; margin-bottom: 10px; }
  `]
})
export class EventList implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => this.events = data);
  }
}