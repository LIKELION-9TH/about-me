import * as Styled from './styled';
import Header from '../../components/Header/Header';
import { locationList } from '../../api/fetch';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		locationList().then((res) => setData(res));
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
						type="location"
						key={`location_${index}`}
					/>
				))}
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default App;
