import '../app.css';
import '../default.css';
import * as Styled from './styled';
import Test from '../components/Test';

function App() {
	return (
		<div className="App">
			<Styled.BodyContainer>
				<Styled.BarContainer>
					<Styled.BarTitle>Company name</Styled.BarTitle>
					<Styled.BarMenuContainer>
						<Styled.BarMenu>Features</Styled.BarMenu>
						<Styled.BarMenu>Enterprise</Styled.BarMenu>
						<Styled.BarMenu>Support</Styled.BarMenu>
						<Styled.BarMenu>Pricing</Styled.BarMenu>
						<Styled.MenuAlignCenter>
							<Styled.BarMenuSignup>Sign Up</Styled.BarMenuSignup>
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
				<Styled.PricingExplanation>with little customization.</Styled.PricingExplanation>
				<Styled.PricingBoxContainer>
					<Styled.PricingBox>
						<Styled.PricingBoxTitle>Free</Styled.PricingBoxTitle>
					</Styled.PricingBox>
					<Styled.PricingBox>
						<Styled.PricingBoxTitle>Pro</Styled.PricingBoxTitle>
					</Styled.PricingBox>
					<Styled.PricingBox>
						<Styled.PricingBoxTitle>Enterprising</Styled.PricingBoxTitle>
					</Styled.PricingBox>
				</Styled.PricingBoxContainer>
			</Styled.BodyContainer>
		</div>
	);
}

export default App;
