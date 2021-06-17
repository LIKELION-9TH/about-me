import './app.css';
import './default.css';
import * as Styled from './styled';

function App() {
	return (
		<div className="App">
			<Styled.BodyContainer>
				<div class="bar-container">
					<div class="bar-title">Company name</div>
					<div class="bar-menu-container">
						<div class="bar-menu">Features</div>
						<div class="bar-menu">Enterprise</div>
						<div class="bar-menu">Support</div>
						<div class="bar-menu">Pricing</div>
						<div class="menu-align-center">
							<div class="bar-menu-signup">Sign Up</div>
						</div>
					</div>
				</div>
				<div class="pricing-title">Pricing</div>
				<div class="pricing-explanation margin-top">
					Quickly build an effective pricing table for your potential customers
					with this
				</div>
				<div class="pricing-explanation">
					Bootstrap example. It's built with default Bootstrap components and
					utilities
				</div>
				<div class="pricing-explanation">with little customization.</div>
				<div class="pricing-box-container">
					<div class="pricing-box">
						<div class="pricing-box-title">Free</div>
					</div>
					<div class="pricing-box">
						<div class="pricing-box-title">Pro</div>
					</div>
					<div class="pricing-box">
						<div class="pricing-box-title">Enterprising</div>
					</div>
				</div>
			</Styled.BodyContainer>
		</div>
	);
}

export default App;
