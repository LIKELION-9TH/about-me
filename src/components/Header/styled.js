import { Typography,Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled.div`
	width: 100%;
`;

export const DrawerTypo = styled(Typography)`
	font-family: NanumBarunGothic;
`;


export const DrawerBody = styled.div`
&&&{
	width: 20vw;
	display: flex;
	flex-direction: column;
	padding-top: 50px;
}
`;

export const DrawerLink = styled.div`
	margin-top: 20px;
	margin-left: 30px;
	font-size: 20px;
`