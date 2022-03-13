import React from 'react';
import {Carousel} from 'react-bootstrap';
const Events = () => {
return (
	
	
	<div className='Events'
	style={{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'row',
		alignItems: 'center',
		height: '100vh'
	}}
	>
    <p><h3> DOWN THE MEMORY LANE </h3>
	   <h1> Our Past Events </h1></p> 

	   {/* <img src= "\img\events\dsacarnival.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\ltc.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\mock in.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\cb.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\campus code.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\future career.jpg" alt='' width='380' height='400'/>
	   <img src= "\img\events\webinar.jpg" alt='' width='380' height='400'/>  */}

<Carousel fade >
  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\ltc.jpg" width='380' height='400'
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>Live the Code </h3>
      <p>Live The Code</p> */}
	  <div>Live the Code </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\dsacarnival.jpg" width='380' height='400'
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\mock in.jpg" width='380' height='400'
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\cb.jpg" width='380' height='400'
      alt="Fourth slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\campus code.jpg" width='380' height='400'
      alt="Fifth slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\future career.jpg" width='380' height='400'
      alt="Sixth slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
	  <div>Future Career</div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-0"
      src="\img\events\webinar.jpg" width='380' height='400'
      alt="Seventh slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
	  <div>Webinar</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

	</div>
);
};

export default Events;
