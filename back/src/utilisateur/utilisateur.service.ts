import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Utilisateur } from './utilisateur.entity';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository: Repository<Utilisateur>,
  ) {}

  utilisateurByContact(contact: string): Promise<Utilisateur> {
    return this.utilisateurRepository.findOne({ where: [{ contact }] });
  }

  nombreUtalisateur(): Promise<number> {
    return this.utilisateurRepository.count();
  }

  createUtilisateur(newUtilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateurRepository.save(newUtilisateur);
  }
}