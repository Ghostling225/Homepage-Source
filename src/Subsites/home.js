import { HomeRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
import * as React from 'react';

export default function SubsiteHome() {
	return (
		<React.Fragment>
			<HomeRounded /> <Typography display="inline" variant="h4">Home</Typography>
			<Typography>This is my personal website, written from scratch in React and hosted on GitHub Pages</Typography>
		</React.Fragment>
	)
}