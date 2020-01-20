import React, {Component} from 'react';
import { Anchor, Box, Footer, Text } from "grommet";
import { Instagram, Github, Linkedin, Mail, Up} from "grommet-icons";



class Media extends Component
{
	render()
	{
		return(
			<div id="contact">
			<Box align="center">
				<Box direction="row" gap="xxsmall" justify="center">
				    <Anchor
				      a11yTitle="Connect with me on Github"
				      href="https://github.com/prabhjyot28"
				      icon={<Github color="dark-1" />}
				      target="_blank"
				    />
				    <Anchor
				      a11yTitle="Email Me"
				      href="mailto:prabhjyot.iitbhu@gmail.com;prabhjyot.singh.min16@itbhu.ac.in"
				      icon={<Mail color="dark-1" />}
				    />
				    <Anchor
				      a11yTitle="Connect with me on Linkedin"
				      href="https://www.linkedin.com/in/prabhjyot-singh-852277141/"
				      icon={<Linkedin color="dark-1" />}
				      target="_blank"
				    />
				    <Anchor
				      a11yTitle="Connect with me on Instagram"
				      href="https://www.instagram.com/prabhjyot.narang/"
				      icon={<Instagram color="dark-1" />}
				      target="_blank"
				    />

				</Box>
				
				<Text size="xsmall">Feel free to connect</Text>
			</Box>
			</div>
			);
	}
}




class BottomBar extends Component
{

	goToTop = ()=>{
		window.scrollTo(0, 0)
	};

	render()
	{
		return(
				<Footer background="light-4" pad="small">
			     
			      <Text textAlign="center" size="xsmall">
			       Copyright © 2020 <br />Prabhjyot Singh
			      </Text>
			      <Media />
			      <Box border="medium" round="full" background="white">
			      	<Anchor icon={<Up size="medium" color="dark-1" />} onClick={this.goToTop}/>
			      </Box>
			    </Footer>
			);
	}
}


export default BottomBar;


