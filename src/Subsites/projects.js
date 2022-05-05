import { Box } from '@mui/system';
import * as React from 'react';
import ProjectCard from '../Components/ProjectCard';
import img from '../res/tetravex.png';

export default function SubsiteProjects() {
	return (
		<React.Fragment>
			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-evenly', gap: 1}}>
				<ProjectCard img={ img } title="C# Tetravex" description="Tetravex is a simple logic puzzle game." githubLink="https://github.com/Ghostling225/Tetravex" />
			</Box>
		</React.Fragment>
	)
}