import React from 'react';
import Box from '@material-ui/core/Box';


export default function About(){
	return (
		<div className="boxes">
		<div className="box1" style={{ 
		    width: '400px',
			height:'300px',
			marginTop: '5%',
			marginLeft: '15px',
			marginRight: '20px',
			marginBottom: '10px',
		 }}>
		
		<h2 className="headings"> OUR GOAL </h2>
		Our goal is to ensure that students love and explore with programming while getting lucrative jobs in the process.
		
		</div>

		<div className="box1"style={{
		width: '400px',
		height:'300px',
		marginTop: '-20.90%',
		marginLeft: '470px',
		marginRight: '150px',
		marginBottom: '5px',
		}}>
		
		<h2 className="headings"> Learn About Us </h2>
		Codechef ADGITM chapter organises regular contests , hackathons , weekly and monthly meets , 
		sessions with mentors and seniors , all to bring out the best in us and motivate us to aspire high in the future
		
		</div>

		<div className="box1" style={{ 
		width: '400px',
		height:'300px',
		marginTop: '-20.5%',
		marginLeft: '925px',
		marginRight: '150px',
		marginBottom: '5px',
		}}>
		
			<h2 className="headings"> Why Should you Join Us? </h2>
			You learn many things, like how to work with a team, how to manage the schedule along with your studies. 
			Also, when you have an event, you have to manage finances, sponsorships, everything. 
			So you learn how to talk to people, approach companies, how to talk to guests, how to deal with your 
			college management [ laugh at the last one ]
		</div>




{/* welcome to Codechef Adgitm */}
		<div className='Events'
	style={{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'column',
		alignItems: 'center',
		height: '100vh'
	}}
	>
		<center> <h1> Welcome to CodeChef ADGITM.</h1>
	    <h3> Our Departments where you can join us </h3> </center>
	<img src= "./backgroundshape.png" alt='left' width='125' height='125'/> 
	<img src= "/img/shape/management.png" alt='left' width='75' height='50'/>
	<h5> MANAGEMENT </h5>
	<p> Management is the brain of an enterprise. </p>

	
	<img src= "./backgroundshape.png" alt='center' width='125' height='125'/>
	<img src="/img/shape/tech.png" alt='center' width='75' height='50'/>
	<h5> TECHNOLOGY </h5>
	<p> Technology is best when it brings people together. </p>

	<img src= "./backgroundshape.png" alt='right' width='125' height='125'/>
	<img src="/img/shape/graphic-design4.png" alt='right' width='75' height='50' />
	<h5> GRAPHIC </h5>
	<p> There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for. </p>
	
	<img src= "./backgroundshape.png" alt='left' width='125' height='125'/>
	<img src="/img/shape/marketing.png" alt='left' width='75' height='50'/>
	<h5> MEDIA OUTREACH </h5>
	<p> The best marketing doesn't feel like marketing. </p>
	
	<img src= "./backgroundshape.png" alt='center' width='125' height='125'/>
	<img src="/img/shape/content.png" alt='center' width='75' height='50'/>
	<h5> CONTENT </h5>
	<p> If plan A fails, remember there are 25 more letters. </p>
	
	
	
	</div>
</div>
		
);
};

// export default About;
