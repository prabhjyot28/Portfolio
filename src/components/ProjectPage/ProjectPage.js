import React, {Component} from 'react';
import {Box, Button, Carousel, Image, Text, Layer} from 'grommet';
import {FormClose} from 'grommet-icons';




class ProjectPage extends Component
{
	closeLayer = ()=>{
		this.props.onRemove();
	};

	myRef = React.createRef();
	

	pressEscape = ()=>{
	
	   const node = this.myRef.current;
	   const f = node.props.onEsc;
	   setTimeout(f, 0);
		
	};


	render()
	{
		return(
				<Layer ref={this.myRef} onEsc={this.closeLayer} onClickOutside={this.closeLayer} style={{zIndex:10}} margin="medium">
					<Box width="large" height="large" align="center" justify="between">
					 <Box background="light-1" width="100%" direction="row" justify="between" pad="small">
						 <Text size="large" weight="bold">{this.props.details.name}</Text>
						 <Box hoverIndicator={true} onClick={this.pressEscape}><FormClose /></Box>
					 </Box>
					 <Text></Text>

					 <Box width="80%" flex={{grow:2}} margin="medium">

                         <Carousel fill play={3500}>
						 	{this.props.details.images.map((image)=> <Image src={image} fill  /> )}
						 </Carousel>
					 </Box>

					 <Box width="100%" flex={{grow:1}} pad="small">
					 	 <Text >{this.props.details.about}</Text>

					 </Box>
					  
					 <Box background="light-1" width="100%" pad="small" direction="row" justify="start">
					 	<Button label="Close" color="dark-4" hoverIndicator={true} onClick={this.pressEscape}></Button>
					 </Box>
					</Box>
				</Layer>
			);
	}
}


export default ProjectPage;

