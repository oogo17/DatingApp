import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knowAs: string;
    age: number;
    gender: string;
    created: Date;
    lasActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    intriduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
