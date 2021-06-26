import { action, makeObservable, observable } from "mobx";
import { apiStatus } from "../../../constants/APIConstants";
import { CompaniesService } from "../../services/CompaniesService";
import { getSearchResultsRequest } from "../../services/types";

class CompaniesStore {
	companiesService: CompaniesService;
	@observable getSearchResultsAPIStatus!: number;
	@observable getSearchResultsAPIError!: string;
	@observable searchResults!: Array<HTMLElement>;

	constructor(companiesService: CompaniesService) {
		this.companiesService = companiesService;
		makeObservable(this);
		this.init();
	}

	@action.bound
	init() {
		this.searchResults = [];
		this.getSearchResultsAPIStatus = 0;
		this.getSearchResultsAPIError = "";
	}

	@action.bound
	setGetSearchResultsAPIStatus(status: number) {
		this.getSearchResultsAPIStatus = status;
	}

	@action.bound
	setGetSearchResultsAPIError(_error: Error | string) {
		this.getSearchResultsAPIError = "Error while fetching the search results";
		console.log(this.getSearchResultsAPIError);
	}

	@action.bound
	setGetSearchResultsAPIResponse(response: Array<HTMLElement>) {
		if (response) {
			for (const result in response) {
			}
		}
	}

	@action.bound
	async getSearchResults(
		data: getSearchResultsRequest,
		onSuccess: Function = (): void => {},
		onFailure: Function = (): void => {}
	) {
		const getSearchResultsAPI = this.companiesService.getSearchResultsAPI(data);
		this.setGetSearchResultsAPIStatus(apiStatus.loading);
		await getSearchResultsAPI
			.then((data) => {
				this.setGetSearchResultsAPIStatus(apiStatus.success);
				this.setGetSearchResultsAPIResponse(data);
				onSuccess();
			})
			.catch((err) => {
				this.setGetSearchResultsAPIStatus(apiStatus.failed);
				this.setGetSearchResultsAPIError(err);
				onFailure();
			});
	}
}

export { CompaniesStore };
