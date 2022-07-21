// External
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import * as React from 'react';
import { VideogameAssetRounded } from '@mui/icons-material';

// Components
import ProjectCard from '../Components/ProjectCard';

// Resources
import rolldungeonImg from '../res/rolldungeon.png';

const gameTitles = ["Roll Dungeon"];
const gameImages = [rolldungeonImg];
const gameDescriptions = ["A game for the GMTK Jam 2022"];
const gameItchLinks = ["https://ghostling.itch.io/roll-dungeon"];
const gameTooltip = "View on itch.io";

export default function SubsiteGames() {
	return (
		<React.Fragment>
			<VideogameAssetRounded /> <Typography display="inline" variant="h4">Games</Typography>
			<Typography>Click any game to view on itch.io</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-evenly', gap: 1}}>
				{
					gameTitles.map((_text, index) => (
						<ProjectCard key={gameTitles[index]} img={gameImages[index]} title={gameTitles[index]} description={gameDescriptions[index]} link={gameItchLinks[index]} tooltip={gameTooltip} />
					))
				}
			</Box>
		</React.Fragment>
	)
}