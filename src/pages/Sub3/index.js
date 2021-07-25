import * as Styled from './styled';
import Header from '../../components/Header/Header';
import sampleImage1 from '../../assets/images/me.jpeg'
import sampleImage2 from '../../assets/images/muckbang.jpg'
import sampleImage3 from '../../assets/images/coding.png'

const App = () => {
	return (
		<Styled.Root>
			<Header />
      <div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage1} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🙆‍♀️취미🙆‍♀️ : 사진찍기📷</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage2} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🙆‍♀️취미🙆‍♀️ : 맛집탐방🍽</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage3} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🙆‍♀️취미🙆‍♀️ : 코딩💻</h4>
				</div>
			</div>
		</Styled.Root>
	);
};

export default App;
