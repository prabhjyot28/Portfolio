import React, {Component} from 'react';
import {Anchor, Box} from 'grommet';
import './Mode.css';
import Sun from '../../assets/sunny-day.png';
import Moon from '../../assets/night-mode.png';




class Mode extends Component
{
	render()
	{
		return(
				<Box direction = "row" align="center">
					<img src={Sun} width = {20} height={20} alt="sun"/>
					<label className="switch" style={{marginLeft:8, marginRight:8}}>
					  <input type="checkbox" />
					  <span className="slider round"></span>
					</label>
					<img src={Moon} width = {20} height={20} alt="moon"/>
				</Box>
			);
	}
}


class CustomHeader extends Component
{
	goTo = (id)=>{
		let node = document.getElementById(id);
		window.scrollTo(0, node.offsetTop);

	};


	render()
	{
		return(
				<Box direction="row" background="light-4" width='100%' pad="small" justify="between" style={{position:'fixed', zIndex:1}}>
					<div style={{visibility:'hidden'}}>
					 <Mode />
					</div>
					<Box direction="row" gap="medium" background="">
						<Anchor  label="Profile" style={{textDecoration:'none'}} color="black" focusIndicator={false} onClick={()=>this.goTo('profile')} />
						<Anchor  label="About"  style={{textDecoration:'none'}} color="black" focusIndicator={false} onClick={()=>this.goTo('about')} />
						<Anchor  label="Experience" style={{textDecoration:'none'}} color="black" onClick={()=>this.goTo('experience')} />
						<Anchor  label="Education" style={{textDecoration:'none'}} color="black" onClick={()=>this.goTo('education')} />
						<Anchor  label="Projects"  style={{textDecoration:'none'}} color="black" onClick={()=>this.goTo('projects')} />
						<Anchor  label="Skills" style={{textDecoration:'none'}} color="black" onClick={()=>this.goTo('skills')} />
						<Anchor  label="Contact" style={{textDecoration:'none'}} color="black" onClick={()=>this.goTo('contact')} />
					</Box>
					<Mode />
				</Box>
			);
	}
}



class TopBar extends Component
{
	render()
	{
		return(<CustomHeader />);
	}
}




export default TopBar;
