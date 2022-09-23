import { Card } from "./card";

export interface Participant {
    participantId?: number,
    name: string;
    age: number;
    mailId: string;
    contact: number;
    card: Card
}