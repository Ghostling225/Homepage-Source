import * as React from 'react';

import { Typography } from '@mui/material';

export default function SubsiteContact() {
	return (
		<React.Fragment>
			<Typography>Contact me at: <Typography color={"secondary"} component="a" href="mailto:wojcikadam742@gmail.com">wojcikadam742@gmail.com</Typography></Typography>
		</React.Fragment>
	)
}