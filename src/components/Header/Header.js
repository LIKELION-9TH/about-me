import * as Styled from './styled';
import {
	AppBar,
	Button,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const App2 = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleOpen = (value) => () => {
		setDrawerOpen(value);
	};

	return (
		<Styled.Root>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleOpen(true)}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6">🌼김소정을 소개합니다🌼</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			{/* Drawer 예제 */}
			<Drawer anchor="left" open={drawerOpen} onClose={handleOpen(false)}>
				{/* 페이지 이동 */}
				<Link to="sub">서브 페이지</Link>
			</Drawer>
		</Styled.Root>
	);
};

export default App2;
