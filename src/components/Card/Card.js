import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Styled from './styled';

const Card = ({ image, title, description, type }) => {
	const [rowData, setRowData] = useState({ title: '', description: '' });

	useEffect(() => {
		if (type === 'music') {
			setRowData({ title: '🎵곡🎵', description: '🎵가수🎵' });
		} else if (type === 'location') {
			setRowData({ title: '⛳️장소⛳️ ', description: '🍴위치🍴' });
		} else if (type === 'hobby') {
			setRowData({ title: '🙆‍♀️취미🙆‍♀️ ', description: '' });
		} else if (type === 'me') {
			setRowData({ title: '📸찍은 장소📸', description: '📸컨셉📸' });
		}
	}, []);

	return (
		<Styled.Root>
			<Styled.Image src={image} alt={title} />
			<h4 style={{ marginBottom: '2px' }}>
				{rowData.title} : {title}
			</h4>
			<h4>
				{rowData.description} : {description}
			</h4>
		</Styled.Root>
	);
};

export default Card;
