import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { RedisStoreModule } from '../redis-store/redis-store.module';

@Module({
  imports: [RedisStoreModule],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
