import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import configs, { GraphqlConfigs } from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AppResolver } from './app.resolver';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<ConnectionOptions>('database');
      },
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const graphqlConfigs = configService.get<GraphqlConfigs>('graphql');
        return {
          ...graphqlConfigs,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
        };
      },
    }),
    UtilisateurModule,
    UtilsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
