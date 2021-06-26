import { create } from "apisauce";

import { networkCallWithAxios } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
import { getSearchResultsRequest } from "../types";
import searchResults from "../../fixtures/search-results.json";

import { CompaniesService } from ".";

class CompaniesAPI implements CompaniesService {
	api: Record<string, any>;

	constructor() {
		this.api = create({ baseURL: "https://www.zaubacorp.com/custom-search" });
	}

	getSearchResultsAPI(data: getSearchResultsRequest) {
		return networkCallWithAxios(this.api, "", data, apiMethods.post, true);
		// const response: Array<any> = JSON.parse(JSON.stringify(searchResults));
		// return new Promise((resolve) => {
		// 	setTimeout(() => resolve(response), 10);
		// });
	}
}

export { CompaniesAPI };
