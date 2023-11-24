import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { OnSearchDTO } from './dto/on_search.dto';

@Injectable()
export class OnSearchService {
  constructor(private readonly httpService: HttpService) {}
  async handleOnSearch(onSearchDto: OnSearchDTO) {
    // TODO: validate the request from BPP
    console.log('onsearchdto in on search: ', JSON.stringify(onSearchDto, null, 2));
    // check if there is a key with messageId in the redisStore.
    // if yes, then add this search result to value object corresponding to the messageId key
    // If not, then create a new entry with key as messageId and value as the search results from this bpp
    return requestForwarder(
      process.env.PROXY_URI,
      onSearchDto,
      this.httpService,
    );
  }
}
