import * as Styled from './styled';
import Header from '../../components/Header/Header';
import sampleImage7 from '../../assets/images/darak.jpeg'
import sampleImage8 from '../../assets/images/doredore.jpeg'
import sampleImage9 from '../../assets/images/springgarden.jpeg'
import sampleImage10 from '../../assets/images/toma.jpeg'
import sampleImage11 from '../../assets/images/gamsungtaco.jpeg'
import sampleImage12 from '../../assets/images/woodyzip.jpeg'
import sampleImage13 from '../../assets/images/chickensoup.jpeg'
import sampleImage14 from '../../assets/images/woowoah.jpeg'
import sampleImage15 from '../../assets/images/basburger.jpeg'

const App = () => {
	return (
		<Styled.Root>
			<Header />
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage7} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 을지다락 강남</h4>
					<h5>🍴위치🍴 : 서울시 강남구</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage8} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 도레도레(Dore Dore)</h4>
					<h5>🍴위치🍴 : 서울시 신사동 가로수길</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage9} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 봄의 정원</h4>
					<h5>🍴위치🍴 : 서울시 성동구</h5>
				</div>
			</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage10} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 연남 토마</h4>
					<h5>🍴위치🍴 : 서울시 마포구</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage11} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 감성타코</h4>
					<h5>🍴위치🍴 : 서울시 강남구</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage12} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 우디집</h4>
					<h5>🍴위치🍴 : 서울시 성동구</h5>
				</div>
			</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage13} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 쩡곱도리탕</h4>
					<h5>🍴위치🍴 : 서울시 동작구</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage14} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 우와</h4>
					<h5>🍴위치🍴 : 서울시 마포구</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage15} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "5px"}}>⛳️장소⛳️ : 바스버거</h4>
					<h5>🍴위치🍴 : 서울시 성동구</h5>
				</div>
			</div>
		</Styled.Root>
	);
};

export default App;
