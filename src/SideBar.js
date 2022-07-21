import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

// Subpages list
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

// Subpages icons
import { HomeRounded, CodeRounded, EmailRounded, TopicRounded, VideogameAssetRounded } from '@mui/icons-material/';

import { Link } from 'react-router-dom';

const drawerWidth = 240;
const pageTitles = ['Home', 'Projects', 'Games', 'Contact', 'CLImod'];
const pageIcons = [<HomeRounded />, <CodeRounded />, <VideogameAssetRounded />, <EmailRounded />, <TopicRounded />];

export default function ClippedDrawer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						{pageTitles.map((text, index) => (
							<ListItem button key={text} component={Link} to={"/" + text.toLowerCase()}>
								<ListItemIcon>{pageIcons[index]}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</React.Fragment>
	);
}