import React from 'react';
// @ts-ignore
import {Slide} from 'react-slideshow-image'
import './slideshow.css'


class SlideShow extends React.Component{
    images: string[] = [
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
      ];
    properties: any = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex:number, newIndex: number) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }


      render(){
          return (
            <div className="slide-container">
        <Slide {...this.properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${require('./images/image1.jpg')})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${require('./images/image2.jpg')})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${require('./images/image3.jpg')})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${require('./images/image4.jpg')})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
          );
      }
}

export default SlideShow;