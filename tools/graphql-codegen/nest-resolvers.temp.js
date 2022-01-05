module.exports = (prismaName, querySource, mutationSource) => {
  return `import { UseGuards } from '@nestjs/common';
import { Args, Context, Info, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import gql from 'graphql-tag';

import { GqlGuard, GqlUser, RequestUser, Roles } from '../../auth';
import { PrismaSelectArgs } from '../../prisma';
import resolvers from '../generated/${prismaName}/resolvers';
import { IContext } from '../models';

export const typeDef = null;
// export const typeDef = gql\`
//   extend type Query {
//     sample${prismaName}Query: ${prismaName}
//   }
//   extend type Mutation {
//     sample${prismaName}Mutation(args: Int!): Boolean
//   }
//   extend type ${prismaName} {
//     sample${prismaName}Field: String
//   }
// \`;

@Resolver('${prismaName}')
@UseGuards(GqlGuard)
@Roles('Super')
export class ${prismaName}Resolver {
${querySource}${mutationSource}
}
`;
};
