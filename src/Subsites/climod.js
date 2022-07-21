import { Box, Typography } from "@mui/material"
import * as React from "react"
import { TopicRounded } from "@mui/icons-material"

import '../Components/ProjectCard'
import ProjectCard from '../Components/ProjectCard'
import climoddocsImg from '../res/climoddocs.png'
import climodsourceImg from '../res/climodsource.png'

export default function SubsiteCLImod() {
	return (
		<React.Fragment>
			<TopicRounded /> <Typography display="inline" variant="h4">CLImod</Typography>
			<Typography>CLImod is a Minecraft coremod that adds useful client-side commands to the game.</Typography>
			
			<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-evenly', gap: 1}}>
				<ProjectCard 
					title="Source"
					img={ climodsourceImg }
					description="Source code for the public parts of CLImod."
					link="https://github.com/Ghostling225/CLImod-public"
					tooltip="View on GitHub"
				/>
				<ProjectCard 
					title="Documentation"
					img={ climoddocsImg }
					description="Instructions for using CLImod."
					link="https://climoddocs.readthedocs.io/"
					tooltip="Read on ReadTheDocs"
				/>				
			</Box>
		</React.Fragment>
	)
}