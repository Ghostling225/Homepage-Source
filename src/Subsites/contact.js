import * as React from 'react';

import { Button, Card, CardActions, CardContent, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';

// import contactImg from '../res/contact.png';

export default function SubsiteContact() {
	return (
		<React.Fragment>
			<Typography variant="h4">Contact</Typography>
			<Typography>Find me online!</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-evenly', gap: 1 }}>
				<Card>
					<CardContent>
						<Typography variant="h5">
							Find me!
						</Typography>
					</CardContent>
					<CardActions>
						<Tooltip title="Email wojcikadam742@gmail.com" arrow>
							<Button href="mailto:wojcikadam742@gmail.com">
								Email
							</Button>
						</Tooltip>
						<Tooltip title="Message Duch#1157" arrow>
							<Button href="https://discord.com/users/627508227289907220" target="_blank">
								Discord
							</Button>
						</Tooltip>
					</CardActions>
				</Card>
				<Card>
					<CardContent>
						<Typography variant="h5">
							Find my work!
						</Typography>
					</CardContent>
					<CardActions>
						<Tooltip title="Visit Ghostling's itch.io page" arrow>
							<Button href="https://ghostling.itch.io" target="_blank">
								itch.io
							</Button>
						</Tooltip>
						<Tooltip title="Visit Ghostling225's GitHub profile" arrow>
							<Button href="https://discord.com/users/627508227289907220" target="_blank">
								GitHub
							</Button>
						</Tooltip>
					</CardActions>
				</Card>
			</Box>
		</React.Fragment>
	)
}