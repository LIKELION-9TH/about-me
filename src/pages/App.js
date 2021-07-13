import * as Styled from './styled';
import Test from '../components/Test';

const testArray = [
	{
		title: 'free',
		content1: '1',
		content2: 'a',
	},
	{
		title: 'pro',
		content1: '2',
		content2: 'b',
	},
	{
		title: 'enterprise',
		content1: '3',
		content2: 'c',
	},
	{
		title: 'free',
		content1: '1',
		content2: 'a',
	},
	{
		title: 'pro',
		content1: '2',
		content2: 'b',
	},
	{
		title: 'enterprise',
		content1: '3',
		content2: 'c',
	},
	{
		title: 'free',
		content1: '1',
		content2: 'a',
	},
	{
		title: 'pro',
		content1: '2',
		content2: 'b',
	},
	{
		title: 'enterprise',
		content1: '3',
		content2: 'c',
	},
	{
		title: 'free',
		content1: '1',
		content2: 'a',
	},
	{
		title: 'pro',
		content1: '2',
		content2: 'b',
	},
	{
		title: 'enterprise',
		content1: '3',
		content2: 'c',
	},
	{
		title: 'free',
		content1: '1',
		content2: 'a',
	},
	{
		title: 'pro',
		content1: '2',
		content2: 'b',
	},
	{
		title: 'enterprise',
		content1: '3',
		content2: 'c',
	},
];

// testArray[0].title => 'free'
// testArray[2].content2 => 'c'

const App = () => {
	const consoleA = () => {
		console.log('a');
	};

	return (
		<Styled.Root>
			<Styled.BodyContainer>
				<Styled.BarContainer>
					<Styled.BarTitle>Company name</Styled.BarTitle>
					<Styled.BarMenuContainer>
						<Styled.BarMenu>Features</Styled.BarMenu>
						<Styled.BarMenu>Enterprise</Styled.BarMenu>
						<Styled.BarMenu>Support</Styled.BarMenu>
						<Styled.BarMenu>Pricing</Styled.BarMenu>
						<Styled.MenuAlignCenter>
							<Styled.BarMenuSignup onClick={consoleA}>
								Sign Up
							</Styled.BarMenuSignup>
						</Styled.MenuAlignCenter>
					</Styled.BarMenuContainer>
				</Styled.BarContainer>
				<Styled.PricingTitle>Pricing</Styled.PricingTitle>
				<Styled.MarginTop></Styled.MarginTop>
				<Styled.PricingExplanation>
					Quickly build an effective pricing table for your potential customers
					with this
				</Styled.PricingExplanation>
				<Styled.PricingExplanation>
					Bootstrap example. It's built with default Bootstrap components and
					utilities
				</Styled.PricingExplanation>
				<Styled.PricingExplanation>
					with little customization.
				</Styled.PricingExplanation>
				<Styled.PricingBoxContainer>
					{testArray.map((test) => (
						<Test
							title={test.title}
							content1={test.content1}
							content2={test.content2}
						/>
					))}
				</Styled.PricingBoxContainer>
			</Styled.BodyContainer>
		</Styled.Root>
	);
};

export default App;
