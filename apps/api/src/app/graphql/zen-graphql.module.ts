import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from '../auth';
import { MailModule } from '../mail';
import { GqlConfigService } from './gql-config.service';
import { NEST_RESOLVERS } from './resolvers';

@Global()
@Module({
  imports: [
    AuthModule,
    MailModule,
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
  ],
  providers: [...NEST_RESOLVERS],
})
export class ZenGraphQLModule {}
