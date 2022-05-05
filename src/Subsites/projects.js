// External
import { Box } from '@mui/system';
import * as React from 'react';

// Components
import ProjectCard from '../Components/ProjectCard';

// Resources
import tetravexImg from '../res/tetravex.png';
import homepageImg from '../res/page.png';
import climodImg from '../res/climod.png';
import cleancraftImg from '../res/cleancraft.png';

const projectTitles = ["C# Tetravex", "React Homepage", "CLImod", "CleanCraft"];
const projectImages = [tetravexImg, homepageImg, climodImg, cleancraftImg];
const projectDescriptions = ["A simple logic puzzle game.", "The code for the very webpage you're on!", "A Minecraft chat mod.", "A simplistic Minecraft resourcepack."];
const projectGithubLinks = ["https://github.com/Ghostling225/Tetravex", "https://github.com/Ghostling225/Homepage-Source", "https://github.com/Ghostling225/CLImod-public", "https://github.com/Ghostling225/CleanCraft"];

export default function SubsiteProjects() {
	return (
		<React.Fragment>
			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-evenly', gap: 1}}>
				{
					projectTitles.map((text, index) => (
						<ProjectCard key={projectTitles[index]} img={projectImages[index]} title={projectTitles[index]} description={projectDescriptions[index]} githubLink={projectGithubLinks[index]} />
					))
				}
			</Box>
		</React.Fragment>
	)
}