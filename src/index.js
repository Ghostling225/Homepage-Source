import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// MUI Theme
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Subsites
import SubsiteHome from './Subsites/home';
import SubsiteProjects from './Subsites/projects';
import SubsiteApps from './Subsites/apps';
import SubsiteContact from './Subsites/contact';
import SubsiteCLImod from './Subsites/climod';

const theme = createTheme({
	palette: {
		mode: 'light',
	},
})

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={ <Navigate to="/home" /> }></Route>

						<Route path="/" element={ <App /> }>
							<Route path="home" element={ <SubsiteHome /> }></Route>
							<Route path="projects" element={ <SubsiteProjects /> }></Route>
							<Route path="apps" element={ <SubsiteApps /> }></Route>
							<Route path="contact" element={ <SubsiteContact /> }></Route>
							<Route path="climod" element={ <SubsiteCLImod /> }></Route>
						</Route>
					</Routes>
				</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
  document.getElementById('root')
);
