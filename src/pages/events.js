import React, { Component } from 'react';
import Slider from 'react-slick';
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      // centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    };
  
// const Events = () => {
return (
	
	
	<div className='Events'
	style={{
		alignItems: 'center',
		height: '100vh',
	}}
	>
    <center><h3> DOWN THE MEMORY LANE </h3>
	   <h1> Our Past Events </h1></center> 

	   {/* <img src= "\img\events\dsacarnival.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\ltc.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\mock in.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\cb.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\campus code.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\future career.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\webinar.jpg" alt='' width='380' height='400'/>  */};


{/* <h2> Multiple Items </h2> */}
        <Slider {...settings}>
          <div>
            <h3><img src= "\img\events\dsacarnival.jpg" alt='' width='380' height='400'/></h3>
          </div>
          <div>
            <h3><img src= "\img\events\ltc.jpg" alt='' width='380' height='400'/></h3>
          </div>
          <div>
            <h3><img src= "\img\events\mock in.jpg" alt='' width='380' height='400'/></h3>
          </div>
          <div>
            <h3><img src= "\img\events\cb.jpg" alt='' width='380' height='400'/></h3>
          </div>
          <div>
            <h3> <img src= "\img\events\campus code.jpg" alt='' width='380' height='400'/> </h3>
          </div>
          <div>
            <h3> <img src= "\img\events\future career.jpg" alt='' width='380' height='400'/> </h3>
          </div>
          <div>
            <h3><img src= "\img\events\webinar.jpg" alt='' width='380' height='400'/></h3>
          </div>
    
          </Slider>
</div>
);
}
}

// export default Events;
