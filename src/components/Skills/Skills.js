import React, {Component} from 'react';
import {Box, Text} from 'grommet';
import Line from '../Line/Line';



class Label extends Component
{
	render()
	{
		return(
				<Text>{this.props.name}</Text>
			);
	}
}




class Skill extends Component
{
	render()
	{
		return(
				<Box width="100%">
				 <Text size="large" weight="bold" margin={{top:"medium", bottom:"medium"}}>{this.props.skill}</Text>
				 {this.props.labels.map((label)=> <Label name={label} key={label}/>)}
				</Box>
			);
	}
}




class Skills extends Component
{
	pro_lang = ['Javascript(ES6)', 'Python', 'SQL', 'C++', 'C'];
	frameworks = ['React-native', 'Scikit-learn', 'Tensorflow', 'Git/GitHub', 'Bootstrap', 'ReactJS', 'NodeJS', 'Keras'];
	tech_skills = ['Mobile Development', 'Web Development', "Machine Learning", 'Data Structures', "Deep Learning", 'Algorithms'];


	render()
	{
		return(
			<div id="skills">
				<Box align="center">
				<Box width="70%">
				 <Text size="xlarge" weight="bold" margin={{top:"large"}}>Skills</Text>
				 <Line color="light-4" />
				 <Box direction="row" width="100%" margin={{bottom:"medium"}}>
					 <Skill skill="Programming Languages" labels={this.pro_lang} />
					 <Skill skill="Tools / Frameworks" labels={this.frameworks} />
					 <Skill skill="Technical Skills" labels={this.tech_skills} />
				 </Box>
				</Box>
				</Box>
			</div>
			);
	}
}


export default Skills;
