import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Mock Data
  private events: Event[] = [
    {
      id: 1,
      title: 'Angular Tech Conference',
      date: '2026-03-15',
      category: 'Technology',
      location: 'Bengaluru Convention Center',
      price: 500,
      description: 'A deep dive into Angular 17+ and modern web dev.',
      imageUrl: 'https://placehold.co/600x400',
      availableTickets: 100
    },
    {
      id: 2,
      title: 'Music Fest 2026',
      date: '2026-04-20',
      category: 'Entertainment',
      location: 'Mumbai Arena',
      price: 1500,
      description: 'Live performances by top artists.',
      imageUrl: 'https://placehold.co/600x400',
      availableTickets: 0 // Sold out example
    },
    {
      id: 3,
      title: 'Startup Summit',
      date: '2026-05-10',
      category: 'Business',
      location: 'Delhi Hub',
      price: 0,
      description: 'Networking for entrepreneurs.',
      imageUrl: 'https://placehold.co/600x400',
      availableTickets: 50
    }
  ];

  private bookings: Booking[] = [];

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  getEventById(id: number): Observable<Event | undefined> {
    const event = this.events.find(e => e.id === id);
    return of(event);
  }

  createBooking(booking: Booking): Observable<boolean> {
    this.bookings.push(booking);
    // Decrease ticket count logic could go here
    return of(true);
  }
}