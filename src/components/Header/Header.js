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
				<Toolbar
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleOpen(true)}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6">🌼김소정을 소개합니다🌼</Typography>
					</div>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			{/* Drawer 예제 */}
			<Drawer anchor="left" open={drawerOpen} onClose={handleOpen(false)}>
				{/* 페이지 이동 */}
				<Styled.DrawerBody>
					<div style={{ fontSize: '25px', marginLeft: '40px' }}>MENU</div>
					<Styled.DrawerLink>
						<button type="button" class="btn btn-outline-primary">
							<Link to="sub1">1) 🎵김소정이 좋아하는 음악🎵</Link>
						</button>
					</Styled.DrawerLink>
					<Styled.DrawerLink>
						<button type="button" class="btn btn-outline-success">
							<Link to="sub2">2) 🍯김소정이 좋아하는 맛집🍯</Link>
						</button>
					</Styled.DrawerLink>
					<Styled.DrawerLink>
						<button type="button" class="btn btn-outline-danger">
							<Link to="sub3">3) 🤸김소정이 좋아하는 취미🤸</Link>
						</button>
					</Styled.DrawerLink>
					<Styled.DrawerLink>
						<button type="button" class="btn btn-outline-info">
							<Link to="sub4">4) 📸김소정이 담겨있는 사진📸</Link>
						</button>
					</Styled.DrawerLink>
				</Styled.DrawerBody>
			</Drawer>
		</Styled.Root>
	);
};

export default App2;
