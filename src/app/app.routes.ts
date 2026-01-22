import { Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';

export const routes: Routes = [
    { path: '', component: EventList },
    { path: 'event/:id', component: EventDetail },
    { path: '**', redirectTo: '' }
];