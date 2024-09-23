import React from 'react';
import './css/work.css';
import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
function Work(){
	const CarouselData = [
		{
		  headerText: 'Finals Exam',
		  subText: '2022',
		  image: '../assets/climate.png',
		},
		{
			headerText: 'Vector Art',
			subText: '2021',
			image: '../assets/ACT2.jpg',
		  },
		  {
			headerText: 'P.E Banner',
			subText: '2021',
			image: '../assets/banner pe.jpg',
		  },
		  {
			headerText: 'Python CSV',
			subText: '2022',
			image: '../assets/graph.jpg',
		  },
		  {
			headerText: 'E-Passport',
			subText: '2022',
			image: '../assets/infomng.png',
		  },
		  {
			headerText: 'Ser Vector',
			subText: '2022',
			image: '../assets/ser.jpg',
		  },
		  {
			headerText: 'Library System Prototype',
			subText: '2022',
			image: '../assets/prototype.jpg',
		  },
		  {
			headerText: 'Myanmar Web',
			subText: '2021',
			image: '../assets/myanmar.png',
		  },
	  ]
    return(
        <div className='work'>
			<h1>WORKS</h1>
       <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
        </div>
    )
}
export default Work;