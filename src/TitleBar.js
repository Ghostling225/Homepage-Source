import * as React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';

// Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Titlebar = (props) => {
  return (
	<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
		<Toolbar>
			<Typography noWrap component="div">
				Ghostling225's Homepage
			</Typography>
		</Toolbar>
	</AppBar>
  );
}

export default Titlebar;