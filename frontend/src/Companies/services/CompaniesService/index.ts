import { getSearchResultsRequest } from "../types";

export interface CompaniesService {
	getSearchResultsAPI: (
		data: getSearchResultsRequest
	) => Promise<Array<HTMLElement>>;
}
