import React from 'react';
import * as Styled from './styled';

const Test = ({ title, content1, content2 }) => {
	return (
		<Styled.PricingBox>
			<Styled.PricingBoxTitle>{title}</Styled.PricingBoxTitle>
			<Styled.PricingBoxTitle>{content1}</Styled.PricingBoxTitle>
			<Styled.PricingBoxTitle>{content2}</Styled.PricingBoxTitle>
		</Styled.PricingBox>
	);
};

export default Test;
