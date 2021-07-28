import React from 'react';
import * as Styled from './styled';

const Card = ({ image, title, singer }) => {
	return (
		<Styled.Root>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '100px',
				marginLeft: '100px',
				alignItems: 'center',
			}}
		>
			<img
				src={image}
				style={{ width: '300px', height: '300px', borderRadius: '10px' }}
			/>
			<h4 style={{ marginBottom: '2px' }}>{title}</h4>
			<h4>{singer}</h4>
		</div>
		</Styled.Root>
	);
};

export default Card;
