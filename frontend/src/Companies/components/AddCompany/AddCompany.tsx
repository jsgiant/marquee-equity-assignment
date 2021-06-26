import React, { useState } from "react";
import { isFetching } from "../../../utils/APIUtils";
import {
	CenterContainer,
	InputContainer,
	InputLabel,
	LabelAndInputContainer,
	ResultContainer,
	ResultItem,
	ResultWrapper,
	SubmitButton,
	TextInput,
	Title,
	TitleContainer,
} from "./styledComponents";

interface AddCompanyProps {
	getResults: Function;
	apiStatus: number;
}

export const AddCompany = (props: AddCompanyProps) => {
	const [shouldShow, setShouldShow] = useState(false);
	const { getResults, apiStatus } = props;
	const showResults = () => {
		setShouldShow(true);
	};

	const onChangeInputValue = (event: any) => {
		const searchQuery = event.target.value;
		if (searchQuery === "") {
			setShouldShow(false);
		} else {
			getResults(searchQuery, showResults);
		}
	};

	return (
		<>
			<TitleContainer>
				<Title>Search & Add Company</Title>
			</TitleContainer>
			<CenterContainer>
				<LabelAndInputContainer>
					<InputLabel>Search</InputLabel>
					<InputContainer>
						<TextInput
							placeholder='Search here...'
							onChange={onChangeInputValue}
							// disabled={isFetching(apiStatus)}
						/>
						<SubmitButton>Submit</SubmitButton>
					</InputContainer>
					<ResultWrapper shouldShow={shouldShow}>
						<ResultContainer>
							<ResultItem>hii</ResultItem>
							<ResultItem>hii</ResultItem>
							<ResultItem>Hello</ResultItem>
							<ResultItem>Hello</ResultItem>
							<ResultItem>Hello</ResultItem>
						</ResultContainer>
					</ResultWrapper>
				</LabelAndInputContainer>
			</CenterContainer>
		</>
	);
};
