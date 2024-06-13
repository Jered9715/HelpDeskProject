export interface ticket{
    ticketId: number;
    subject: string;
    details: string;
    resolution: string;
    ticketStatus: boolean;
    bookmarked?: boolean;
    clientId: string;
    techId: string;
}

