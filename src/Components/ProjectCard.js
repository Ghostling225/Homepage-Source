import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material';
import * as React from 'react';

export default function ProjectCard(props) {
	return (
		<React.Fragment>
			<Card sx={{ maxWidth: 400 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="225"
						image={ props.img }
						alt="Image"
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
				<CardActions>
					<Button size="small" color="primary" href={ props.githubLink } target="_blank">
						View on GitHub
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	)
}