import * as Styled from './styled';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { hobbyList } from '../../api/fetch';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		hobbyList().then((res) => setData(res));
	}, []);

	return (
		<Styled.Root>
			<Header />
			<Styled.CardContainer>
				{data?.map((card, index) => (
					<Card
						title={card.title}
						description={card.description}
						type="hobby"
						key={`hobby_${index}`}
					/>
				))}
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default App;
