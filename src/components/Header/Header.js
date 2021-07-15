import * as Styled from "./styled";
import Test from "../Test";
import { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const App2 = () => {
  return (
    <Styled.Root>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">
            🌼김소정을 소개합니다🌼
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Styled.Root>
  );
};

export default App2;
