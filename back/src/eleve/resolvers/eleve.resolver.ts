import { Query, Resolver, Args } from '@nestjs/graphql';

import { EleveService } from '../eleve.service';
import { InputMatriculeEleve } from '../eleve.type';
import { Eleve } from '../eleve.entity';

@Resolver()
export class OneEleveResolver {
  constructor(private eleveService: EleveService) {}

  @Query(() => Eleve)
  async eleve(
    @Args('matriculeInput') matriculeInput: InputMatriculeEleve,
  ): Promise<Eleve> {
    return this.eleveService.oEleveByIdUtilisateur(matriculeInput.matricule);
  }
}
