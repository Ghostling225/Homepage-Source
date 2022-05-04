import * as React from 'react';

// Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, Toolbar } from '@mui/material';

import { Outlet } from 'react-router-dom';

const Content = (props) => {
  return (
	<React.Fragment>
		<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
		  <div id="content">
				<Outlet />
		  </div>
      </Box>
	</React.Fragment>
  );
}

export default Content;