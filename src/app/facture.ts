import { Enfant } from "./enfant";
import { User } from "./user";

export interface Facture {
    parent: User;
    enfant: Enfant;
    typeAbonnement: string;
    total: number; 
    date: Date;
    description: string;
    etat:number;
    

  }