import * as Styled from './styled';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { meList } from '../../api/fetch';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		meList().then((res) => setData(res));
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
						type="me"
						key={`me_${index}`}
					/>
				))}
			</Styled.CardContainer>
		</Styled.Root>
	);
};

export default App;
