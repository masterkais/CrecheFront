import { Facture } from "./facture";
import { User } from "./user";

export interface Abonnement {
    idAbo: number;
    dateDebut: Date;
    dateFin: Date;
    id_enfant: string;
    type: string;
    utilisateur: number | null;
    facture: number | null;
    
  }