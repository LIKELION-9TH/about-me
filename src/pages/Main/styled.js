import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const DrawerTypo = styled(Typography)`
	font-family: 'Nanum Gothic Coding', monospace;
`;

export const Root = styled.div `
	width : 100%;
  display: flex;
  flex-direction: column;
`
export const Introduce = styled.div`
  width : 100%;
  height : 60px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 35px;
`

export const SubIntroduce = styled.div`
  width : 100%;
  height : 60px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const BasicInformationTitle = styled.div`
  width : 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
`

export const BasicInformation = styled.div`
  width : 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
