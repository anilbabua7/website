import React from 'react';
// @ts-ignore
import { Slide } from 'react-slideshow-image'
import './slideshow.css'
import WebsiteButtons from './../website-buttons'
import Home from './../home'
import Programs from '../programs';
import Read from '../read';
import Gallery from '../gallery';
import History from '../history';


class SlideShow extends React.Component<any,any> {
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
    onChange: (oldIndex: number, newIndex: number) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  constructor(props: any){
    super(props);
    this.state = {
        renderComponent : ''
    };
    this.setComponent = this.setComponent.bind(this);
    this.showComponent = this.showComponent.bind(this);
}

setComponent(component: string){
    console.log('You are here');
    this.setState({
        renderComponent : component
    });
}

showComponent = () =>{
    switch(this.state.renderComponent){
        case 'home' : return <Home />;
        case 'programs': return <Programs></Programs>;
        case 'read': return <Read></Read>;
        case 'gallery': return <Gallery></Gallery>;
        case 'history': return <History></History>;
        default: return <Home></Home> 
    }
  
}

  render() {
    return (
      <div className="slide-container">
        <WebsiteButtons setComponent = {this.setComponent}></WebsiteButtons>
        <Slide {...this.properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${require('./images/image1.jpg')})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${require('./images/image2.jpg')})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${require('./images/image3.jpg')})` }}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${require('./images/image4.jpg')})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
        {this.showComponent()}
      </div>
    );
  }
}

export default SlideShow;