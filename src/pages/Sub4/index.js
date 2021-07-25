import * as Styled from './styled';
import Header from '../../components/Header/Header';
import sampleImage1 from '../../assets/images/choolgeun.JPG'
import sampleImage2 from '../../assets/images/inthemorning.jpeg'
import sampleImage3 from '../../assets/images/withjisu.jpeg'
import sampleImage4 from '../../assets/images/mango.jpeg'
import sampleImage5 from '../../assets/images/ganghwado.jpeg'
import sampleImage6 from '../../assets/images/cosmetic.jpeg'
import sampleImage7 from '../../assets/images/apgujeong.jpeg'
import sampleImage8 from '../../assets/images/gongcha.jpeg'
import sampleImage9 from '../../assets/images/hongdae.jpeg'


const App = () => {
	return (
		<Styled.Root>
			<Header />
      <div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage1} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🚃성수역🚃</h4>
          <h5>📸컨셉📸 : 출근하다가 화나서 뒷목잡는 컨셉</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage2} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🏠사당역 우리집 앞🏠</h4>
          <h5>📸컨셉📸 : 아침부터 옷을 제대로 입었는지 확인하는 컨셉</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage3} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🍨강남역 랑데자뷰🍨</h4>
          <h5>📸컨셉📸 : 키 170 넘는 사람 2명이서 사진 찍는 컨셉</h5>
				</div>
			</div>
      <div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage4} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🍨강남역 정월🍨</h4>
          <h5>📸컨셉📸 : 날씨 이럴거면 망고가 열리길 비는 컨셉</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage5} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🍨강화도 셀로스터스🍨</h4>
          <h5>📸컨셉📸 : 사진찍어달라 해놓고 모르는 척하는 컨셉</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage6} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🚃홍대입구역 어딘가🚃</h4>
          <h5>📸컨셉📸 : 정말 3년만에 화장해봄(컨셉아님)</h5>
				</div>
			</div>
      <div style={{display: "flex", flexDirection: "row"}}>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "130px", alignItems: "center"}}>
					<img src={sampleImage7} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🍨압구정 뉴욕라츠오베이글스🍨</h4>
          <h5>📸컨셉📸 : 놀러간 것 같은 컨셉(실상 브런치 먹고 출근)</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage8} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🍨서울역 공차🍨</h4>
          <h5>📸컨셉📸 : 강의듣다가 쉬는시간에 갑자기 찍힌 컨셉</h5>
				</div>
				<div style={{display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "100px", alignItems: "center"}}>
					<img src={sampleImage9} style={{width: "300px", height: "300px", borderRadius: "10px"}} />
					<h4 style={{marginBottom: "2px"}}>📸찍은 장소📸 : 🚃홍대입구 원더플레이스🚃</h4>
          <h5>📸컨셉📸 : 친구랑 얼떨떨하게 만남(컨셉 아님)</h5>
				</div>
			</div>
		</Styled.Root>
	);
};

export default App;
