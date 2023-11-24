import { components } from 'types/schema';

export class SearchResults {
    context: components['schemas']['Context'];
    message: {
        catalog: components['schemas']['Catalog']
    }
}