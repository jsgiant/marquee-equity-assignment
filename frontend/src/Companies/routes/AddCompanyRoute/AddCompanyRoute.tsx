import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, withRouter } from "react-router-dom";
import { History } from "history";
import cogoToast from "cogo-toast";
import { useStores } from "../../../Stores";
import { AddCompany } from "../../components/AddCompany/AddCompany";

interface AddCompanyRouteProps {
	history: History;
}

export const AddCompanyRoute = observer((props: AddCompanyRouteProps) => {
	const { history } = props;

	const {
		companiesStore: {
			getSearchResults,
			getSearchResultsAPIStatus,
			getSearchResultsAPIError,
		},
	} = useStores();

	const showError = () => {
		// console.log(getSearchResultsAPIError, getSearchResultsAPIStatus);
		cogoToast.error(getSearchResultsAPIError, {
			position: "bottom-center",
		});
	};

	const getResults = (query: string, onSuccess: Function = (): void => {}) => {
		getSearchResults(
			{ filter: "company", search: query },
			onSuccess,
			showError
		);
	};

	return (
		<AddCompany getResults={getResults} apiStatus={getSearchResultsAPIStatus} />
	);
});
