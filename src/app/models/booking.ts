export interface Booking {
    id?: number;
    eventId: number;
    userId: string;
    userEmail: string;
    ticketCount: number;
    date: Date;
}