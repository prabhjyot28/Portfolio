import React, {Component} from 'react';
import {Box, Text} from 'grommet';
import Line from '../Line/Line';





class About extends Component
{

	

	render()
	{
		return(
				<div id="about">
				<Box align="center">
				<Box width="70%" height="medium">
				 <Text size="xlarge" weight="bold" margin={{top:"large"}}>About Me</Text>
				 <Line color="light-4"/>
				 <Text size="large">Hi !</Text>
				 <hr />
				 <Text size="large">I'm Prabhjyot Singh, final year student at <b>Indian Institute of Technology (BHU) Varanasi</b>. I am a design-minded software engineer focused on building beautiful interfaces
				 with a keen interest in latest technologies, I aspire towards a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences, I strive to create impact on others lives to be more creative, productive, and fun.
				 </Text>
				 <hr />
				 <Text size="large">When I am not on computer, I love playing cricket, football and hanging out with friends.</Text>
				</Box>
				</Box>
				</div>
			);
	}
}


export default About;
