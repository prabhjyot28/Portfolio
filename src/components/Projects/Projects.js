import React, {Component} from 'react';
import {Box, Text} from 'grommet';
import ProjectPage from '../ProjectPage/ProjectPage';
import Line from '../Line/Line';

import f1 from '../../assets/faceapp1.png';
import f2 from '../../assets/faceapp2.png';
import f3 from '../../assets/faceapp3.png';
import f4 from '../../assets/faceapp4.png';

import b1 from '../../assets/banksearch1.png';
import b2 from '../../assets/banksearch2.png';




class Project extends Component
{
	state={
		show:false
	};

   

	showLayer = ()=>{
		this.setState({show:true});
	};

	removeLayer = ()=>{

		this.setState({show:false});
	};


	render()
	{
		return(
			    <Box width="medium" height="small" onClick={this.showLayer} focusIndicator={false} align="center" margin="small" background="white">
		 		 <Text size="large" weight="bold" margin="small">{this.props.project.name}</Text>
		 		 { this.state.show && (<ProjectPage onRemove={this.removeLayer} details={this.props.project}/>)}
		 		 <Box width="80%" height="100%" margin={{bottom:'small'}}>
		 		  <img src={this.props.project.images[0]} width="100%" height="100%" alt="project_image"/>
		 		 </Box>
		 		</Box>
			);
	}
}



class Projects extends Component
{
	
	projects = [{
		name: 'Face Detection Web App',
		images: [f1, f2, f3, f4],
		about : 'A cross browser fully responsive web application which can detect whether an image contains any human face or not.',
		labels: ['React JS', 'Node JS', 'Bootstrap', 'Github', 'Heroku']	
	}, {
		name: 'Bank Search Web App',
		images: [b1, b2],
		about : 'A web application that allows to search banks all over the India very easily by using city names / IFSC / MICR code.',
		labels: ['React JS', 'Bootstrap', 'Github']
	}, {
		name: 'Portfolio',
		images: [f1, f2, f3, f4],
		about : 'Portfolio that you are currently looking at',
		labels: ['React JS', 'Grommet', 'Github']
	}];


	render()
	{
		return(
			<div id="projects">
				<Box background="light-4" align="center">
				 <Box justify="center" align="center" width="70%">
					 <Text size="xlarge" weight="bold" margin={{top:"large"}}>Projects</Text>
					 <Line color="white" />
					 <Box direction="row" justify="around">
					 	{ this.projects.map((pro) => <Project project={pro} key={pro.name} />) }
					 </Box>
				 </Box>
				</Box>
			</div>
			);
	}
}


export default Projects;



