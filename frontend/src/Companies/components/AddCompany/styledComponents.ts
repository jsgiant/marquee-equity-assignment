import tw from "twin.macro";
import styled from "styled-components";

type ButtonProps = {
	shouldShow: boolean;
};

export const Title = styled.span`
	${tw`
text-lg font-bold mr-8px
`}
`;

export const TitleContainer = styled.div`
	${tw`
flex items-center justify-center
`}
`;

export const CenterContainer = styled.div`
	${tw`
flex items-center justify-center self-center mx-auto
`}
`;

export const LabelAndInputContainer = styled.div`
	${tw`
      w-full flex flex-col
   `}
`;

export const InputLabel = styled.span(() => [tw`text-gray3`]);

export const InputContainer = styled.div`
	${tw`
      flex items-center relative justify-center
   `}
`;

export const TextInput = styled.input(() => [
	tw`mt-8px border border-solid border-gray20 outline-none focus:border-royalBlue`,
	`height: 28px;
    border-radius: 7px 0 0 7px;
    padding: 6px 12px;
    font-size: 14px;
    color: #555;
    background-color: #fff;
    width:23.3%;
    `,
]);

export const SubmitButton = styled.button`
	${tw`bg-royalBlue h-8 text-white border-0 rounded ml-4 cursor-pointer`}
`;

export const ResultWrapper = styled.div`
	${tw`
      flex items-center relative justify-center
   `};
	width: 94.7%;
	display: ${(props: ButtonProps) => (props.shouldShow ? `flex` : `none`)};
`;

export const ResultContainer = styled.div`
	${tw`flex flex-col`}
	margin-top: 145px;
	max-height: 209px;
	overflow: auto;
	padding: 6px 8px;
	border-style: none solid solid;
	border-width: medium 1px 1px;
	position: absolute;
	text-align: left;
	width: 25%;
	z-index: 9999;
`;

export const ResultItem = styled.div`
	${tw`hover:bg-royalBlue hover:text-white cursor-pointer`}
	padding: 4px;
	border-bottom: 1px #999 dashed;
	font-size: 14px;
`;
