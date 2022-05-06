import { Card, CardActionArea, CardMedia, CardContent, Typography, Tooltip } from '@mui/material';
import * as React from 'react';

export default function ProjectCard(props) {
	return (
		<React.Fragment>
			<Tooltip title={ props.tooltip } placement="bottom" arrow>
				<Card sx={{ maxWidth: 400, minWidth: 200 }}>
					<CardActionArea href={ props.link } target="_blank">
						<CardMedia
							component="img"
							height="225"
							image={ props.img }
							alt="Card decorative image"
						/>
						<CardContent>
							<Typography variant="h5">
								{ props.title }
							</Typography>
							<Typography>
								{ props.description }
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>				
			</Tooltip>
		</React.Fragment>
	)
}