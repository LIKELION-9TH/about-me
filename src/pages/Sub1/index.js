import * as Styled from './styled';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { musicList } from '../../api/fetch';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		musicList().then((res) => setData(res));
		musicList().then((res) => console.log(res));
	}, []);

	return (
		<Styled.Root>
			<Header />
			<Styled.CardContainer>
				{data?.map((card, index) => (
					<Card
						title={card.title}
						description={card.description}
						image={card.banner_image}
						type="music"
						key={`music_${index}`}
					/>
				))}
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default App;
