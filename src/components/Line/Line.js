import React, {Component} from 'react';
import {Box} from 'grommet';



class Line extends Component
{
	render()
	{
		return(
				<Box width="100%" border={{color:this.props.color}} background={this.props.color} style={{height:2}} margin={{top:"medium", bottom:"medium"}}>
				</Box>
			);

	}
}



export default Line;
