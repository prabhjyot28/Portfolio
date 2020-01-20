import React, {Component} from 'react';
import Prabhjyot from '../../assets/Prabhjyot.jpg';
import {Box, Button, Text} from 'grommet';
import {DocumentDownload} from 'grommet-icons';
import doc from '../../assets/Prabhjyot_resume.pdf';




class Front extends Component
{
	render()
	{
		return(
			<div id="profile">
				<Box justify="end" align="center" height="medium" pad="medium" background="light-4">
					<img src={Prabhjyot} width="120" height="120" style={{borderRadius:75}} alt="my_pic"/>
					<Text size="xxlarge" margin={{top:"medium", bottom:"xsmall"}} weight="bold">Prabhjyot Singh</Text>
					<Text size="large" >Software Engineer, Varanasi, IN</Text>
					<Button plain icon={<DocumentDownload />} label="Resume" href={doc} target="_blank" margin={{top:"medium"}} />
				</Box>
			</div>
			);
	}
}

export default Front;
