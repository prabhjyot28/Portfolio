import React, {Component} from 'react';
import {Box, Text} from 'grommet';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Line from '../Line/Line';
import Avail from '../../assets/Avail.png';
import Mytokri from '../../assets/mytokri.png';




class Experience extends Component
{
	render()
	{
		return(
				<div id="experience">
				<Box align="center" background="light-4">
				<Box justify="center" align="center" width="70%">
				<Text size="xlarge" weight="bold" margin={{top:"large"}}>Experience</Text>
				<Line color="white" />
				<VerticalTimeline>
				  <VerticalTimelineElement
				    className="vertical-timeline-element--work"
				    contentStyle={{color: 'black' }}
				    date="May 2019 - July 2019"
				    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				    icon={<img src={Avail} width={60} height={60} style={{borderRadius:30}} alt="avail"/>}
				  >
				    <h3 className="vertical-timeline-element-title">Frontend Devloper Interenship</h3>
				    <h4 className="vertical-timeline-element-subtitle">Avail Finance, Bangalore</h4>
				    <p>
				      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
				    </p>
				  </VerticalTimelineElement>
				  <VerticalTimelineElement
				    className="vertical-timeline-element--work"
				    contentStyle={{color: 'black' }}
				    date="June 2018 - July 2018"
				    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				    icon={<img src={Mytokri} width={60} height={60} style={{borderRadius:30}} alt="mytokri"/>}
				  >
				    <h3 className="vertical-timeline-element-title">Software Devloper Interenship</h3>
				    <h4 className="vertical-timeline-element-subtitle">MyTokri, Alwar</h4>
				    <p>
				      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
				    </p>
				  </VerticalTimelineElement>
				  
				</VerticalTimeline>
				</Box>
				</Box>
				</div>
			);
	}
}


export default Experience;




// <VerticalTimelineElement
// 				    className="vertical-timeline-element--work"
// 				    date="2008 - 2010"
// 				    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  >
// 				    <h3 className="vertical-timeline-element-title">Web Designer</h3>
// 				    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
// 				    <p>
// 				      User Experience, Visual Design
// 				    </p>
// 				  </VerticalTimelineElement>
// 				  <VerticalTimelineElement
// 				    className="vertical-timeline-element--work"
// 				    date="2006 - 2008"
// 				    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  >
// 				    <h3 className="vertical-timeline-element-title">Web Designer</h3>
// 				    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
// 				    <p>
// 				      User Experience, Visual Design
// 				    </p>
// 				  </VerticalTimelineElement>
// 				  <VerticalTimelineElement
// 				    className="vertical-timeline-element--education"
// 				    date="April 2013"
// 				    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  >
// 				    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
// 				    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
// 				    <p>
// 				      Strategy, Social Media
// 				    </p>
// 				  </VerticalTimelineElement>
// 				  <VerticalTimelineElement
// 				    className="vertical-timeline-element--education"
// 				    date="November 2012"
// 				    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  >
// 				    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
// 				    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
// 				    <p>
// 				      Creative Direction, User Experience, Visual Design
// 				    </p>
// 				  </VerticalTimelineElement>
// 				  <VerticalTimelineElement
// 				    className="vertical-timeline-element--education"
// 				    date="2002 - 2006"
// 				    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  >
// 				    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
// 				    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
// 				    <p>
// 				      Creative Direction, Visual Design
// 				    </p>
// 				  </VerticalTimelineElement>
// 				  <VerticalTimelineElement
// 				    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
// 				    icon={<Instagram />}
// 				  />