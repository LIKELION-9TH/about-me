import * as Styled from './styled';
import Header from '../../components/Header/Header';

const App = () => {
	return (
		<Styled.Root>
			<Header />
			<Styled.Introduce>
				🌝알고 싶지 않겠지만 여기는 김소정 TMI 천국입니다! 환영해요!🌝
			</Styled.Introduce>
			<Styled.SubIntroduce>
				👉저에 대해 궁금하시지는 않겠지만 혹시 궁금하시다면 구경해주세요!👈
			</Styled.SubIntroduce>
			<Styled.BasicInformationTitle>
				👻김소정의 기본 정보👻
			</Styled.BasicInformationTitle>
			<Styled.BasicInformation>이름 : 👩‍💻김 소 정👩‍💻</Styled.BasicInformation>
			<Styled.BasicInformation>
				생년월일 : 🎂1997.10.16🎂 - 현재 만 23세
			</Styled.BasicInformation>
			<Styled.BasicInformation>MBTI : ⭐️ESFJ⭐️</Styled.BasicInformation>
			<Styled.BasicInformation>
				학교 및 전공, 학년, 학적상태 : 🔮성신여자대학교 AI융합학부 1학년 재학🔮
			</Styled.BasicInformation>
		</Styled.Root>
	);
};

export default App;
