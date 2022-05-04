import Titlebar from './TitleBar.js';
import Sidebar from './SideBar.js'
import Content from './Content.js'

import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
	 	<Titlebar />
    	<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Content />
		 </Box>
    </div>
  );
}

export default App;
