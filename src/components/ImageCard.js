import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props){
    super(props);
    //create reference to DOM with ref system and catch info
    //system for handle of DOM
    this.state = {spans : 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
  this.imageRef.current.addEventListener('load' , this.setSpans);
  }
  
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10); //150 is row in css
    this.setState({spans});
  }

  render() {
    const { description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description}/>
      </div>
    );
  }
}

export default ImageCard;