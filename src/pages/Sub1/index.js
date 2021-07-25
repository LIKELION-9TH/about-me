import * as Styled from './styled';
import Header from '../../components/Header/Header';
import sampleImage1 from '../../assets/images/nextlevel.png'
import sampleImage2 from '../../assets/images/dancemonkey.jpg'
import sampleImage3 from '../../assets/images/rosesong.jpeg'
import sampleImage4 from '../../assets/images/inroom.jpeg'
import sampleImage5 from '../../assets/images/dundundance.jpeg'
import sampleImage6 from '../../assets/images/holdmyhand.jpeg'
import sampleImage7 from '../../assets/images/butter.jpg'
import sampleImage8 from '../../assets/images/I.jpeg'
import sampleImage9 from '../../assets/images/likelike.jpeg'

const App = () => {
	return (
		<Styled.Root>
			<Header />
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage1} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : NextLevel</h4>
					<h4>🎵가수🎵 : aespa</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage2} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : Dancemonkey</h4>
					<h4>🎵가수🎵 : Tones and I</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage3} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : 장미 유행가</h4>
					<h4>🎵가수🎵 : RIO</h4>
				</div>
			</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage4} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : 방안에서</h4>
					<h4>🎵가수🎵 : PHZD(페이즈디)</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage5} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : Dun Dun Dance</h4>
					<h4>🎵가수🎵 : 오마이걸</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage6} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : 내 손을 잡아</h4>
					<h4>🎵가수🎵 : 아이유</h4>
				</div>
			</div>
      <div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage7} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : Butter</h4>
					<h4>🎵가수🎵 : BTS(방탄소년단)</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage8} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : I</h4>
					<h4>🎵가수🎵 : 태연(feat.버벌진트)</h4>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage9} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>🎵곡🎵 : 좋아좋아</h4>
					<h4>🎵가수🎵 : 조정석</h4>
				</div>
			</div>
		</Styled.Root>
	);
};

export default App;
