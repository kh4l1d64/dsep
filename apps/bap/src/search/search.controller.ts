import { Body, Controller, ParseUUIDPipe, Post, Res } from '@nestjs/common';
import { contextGenerator, intentGenerator } from 'utils/generators';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {

    constructor(private searchService: SearchService) {}

    @Post()
    async getSearchResults(
        @Body("searchInput") searchInput: string, 
        @Body("userId", ParseUUIDPipe) userId: string, 
        @Res() res) {
        // validate the post request(userId validation)
        // generate beckn compliant search request 
        
        // fire it to bg
        await this.searchService.getSearchResponses({searchTitle: searchInput, userId});
    }
}
