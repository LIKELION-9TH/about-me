import styled from 'styled-components';

export const BodyContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BarContainer = styled.div`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid;
`;

export const BarTitle = styled.div`
	display: flex;
	align-items: center;
	padding: 30px 40px;
	box-sizing: border-box;
	font-size: 20px;
`;

export const BarMenuContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	margin-right: 30px;
`;

export const BarMenu = styled.div`
	display: flex;
	align-items: center;
	padding: 30px 15px;
`;

export const MenuAlignCenter = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

export const BarMenuSignup = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	padding: 5px 15px;
	box-sizing: border-box;
	border: 1px solid;
	border-radius: 20px;
	border-color: blue;
`
export const PricingTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 60px;
	margin-top: 50px;
`

export const MarginTop = styled.div`
	margin-top: 20px;
`

export const PricingExplanation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	margin-top: 7px;
`

export const PricingBoxContainer = styled.div`
	height: 500px;
	display: flex;
	align-items: center;
	flex-direction: row;
	margin-top: 10px;
`

export const PricingBox = styled.div`
	height: 350px;
	width: 250px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid;
	padding: 0px 15px;
`

export const PricingBoxTitle = styled.div`
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 70px;
	box-sizing: border-box;
	font-size: 30px;
`
