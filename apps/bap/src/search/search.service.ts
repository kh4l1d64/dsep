import { Injectable } from '@nestjs/common';
import axios from "axios";
import {
  buildSearchRequest,
  buildOnSearchMergedResponse,
  buildSearchResponse,
  buildInitRequest,
  buildInitResponse,
  buildConfirmRequest,
  buildConfirmResponse,
  buildStatusRequest,
  buildStatusResponse,
  buildSelectRequest,
  buildSelectResponse
} from "utils/schema-build-helper";
// import searchResponse from "../mocks/searchResponse.json";

const gatewayUrl = 'https://gateway.becknprotocol.io/bg';

@Injectable()
export class SearchService {
    async getSearchResponses(body: any): Promise<any> {
        try {
            console.log("HERE IN SERVICE METHOD")
            const {payload, optional} = buildSearchRequest(body);
            console.log(JSON.stringify(payload));
            let searchResponse: any = {};
            const headers = {
                "Content-Type": "application/json"
            };
            console.log("GATEWAY URL: ", gatewayUrl);
            const searchRes = await axios.post(`${gatewayUrl}/search`, payload, {headers});
            console.log("-----------------------------------------------");
            console.log(JSON.stringify(searchRes.data));
            const res = { searchRes };
            searchResponse = buildOnSearchMergedResponse(res, body);
            console.log(searchResponse);
            return searchResponse;
        } catch (err: any) {
            console.log(err);
            return {error: err, errorOccured: true};
        }
    }
}
