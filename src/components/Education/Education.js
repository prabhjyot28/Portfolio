import React, {Component} from 'react';
import {Box, Carousel, Text, Image} from 'grommet';
import Line from '../Line/Line';




import C1 from '../../assets/iitbhu1.jpg';
import C2 from '../../assets/iitbhu2.jpg';
import C3 from '../../assets/iitbhu3.jpg';
import C4 from '../../assets/iitbhu4.jpg';



import S1 from '../../assets/na.jpg';
import S2 from '../../assets/na2.jpeg';


class College extends Component
{
	render()
	{
		return(
			
					<Box direction="row" width="100%" height="small">
					 <Box margin={{right:"medium"}} height="100%" width="30%">
					  <Carousel fill controls={false} play={3500}>
				        <Image src={C1} fill alt="college"/>
				        <Image src={C2} fill alt="college"/>
				        <Image src={C3} fill alt="college"/>
				        <Image src={C4} fill alt="college"/>
				      </Carousel>
				      </Box>
					 <Box width="70%">
					  <Text size="large" weight="bold">Indian Insitute of Technology, BHU, Varanasi</Text>
					  <Box direction="row" justify="between">
					  <Text size="medium">Bachelors of Technology</Text>
					  <Text>May 2016 - May 2020</Text>
					  </Box>
					 </Box>
					</Box>
			
			);
	}
}


class School extends Component
{
	render()
	{
		return(
			
					<Box direction="row" width="100%" height="small" margin={{top:"medium", bottom:"medium"}}>
					 <Box margin={{right:"medium"}} height="100%" width="30%">
				      <Carousel fill controls={false} play={3500}>
				        <Image src={S1} fill alt="college"/>
				        <Image src={S2} fill alt="college"/>
				      </Carousel>
				     </Box>
					 <Box width="70%">
					  <Text size="large" weight="bold">National Academy, Alwar</Text>
					  <Box direction="row" justify="between">
					  <Text size="medium">High School</Text>
					  <Text>2015</Text>
					  </Box>
					 </Box>
					</Box>
			
			);

	}
}





class Education extends Component
{
	render()
	{
		return(
				<div id="education">
				<Box align="center">
				<Box width="70%">
					<Text size="xlarge" weight="bold" margin={{top:"large"}} >Education</Text>
					<Line color="light-4" />
					<College />
					<School />
				</Box>
				</Box>
				</div>
			);
	}
}



export default Education;







