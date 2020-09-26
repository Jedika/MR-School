import { createUnionType, ObjectType, Field, InputType } from '@nestjs/graphql';

import { Matiere } from './matiere.entity';
import { Classe } from '../classe/classe.entity';
import { Section } from '../section/section.entity';
import { Responsable } from '../responsable/responsable.entity';

@ObjectType()
export class CoefficientTable {
  @Field(() => Classe)
  classe: Classe;

  @Field({ nullable: true })
  coefficient: number;

  @Field()
  status: boolean;
}

@ObjectType()
export class EnseignerTable {
  @Field()
  classe: Classe;

  @Field()
  section: Section;

  @Field(() => [Responsable])
  professeur: Responsable[];

  @Field()
  status: boolean;
}

// create matiere

@ObjectType()
export class CreateMatiereError {
  @Field()
  designationAlreadyExist: string;
}

export const CreateMatiereResult = createUnionType({
  name: 'CreateMatiereResult',
  types: () => [CreateMatiereError, Matiere],
  resolveType: (value: CreateMatiereError | Matiere) => {
    if (value instanceof CreateMatiereError) return 'CreateMatiereError';
    if (value instanceof Matiere) return 'Matiere';
    return null;
  },
});

// fin create matiere

// update matiere

@InputType()
export class UpdateMatiereInput implements Partial<Matiere> {
  @Field()
  id: number;

  @Field()
  designation: string;
}

// fin update matiere
