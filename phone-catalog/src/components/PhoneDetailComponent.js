import React, { Component } from 'react';
export default class PhoneDetailComponent extends Component {
  render(){
    const { visible } = this.props;
    const { id, image, title, description, price } = this.props.phone;
    
    return <div className="phone-detail-wrapper" key={ id } style={{'display': visible ? 'block':'none' }} >
            <div className="card phone-detail">
              <div className="wrapper-thumbnail">
                <div className="bt-close" onClick={ this.props.hideCardDetail } >X</div>
                <div className="thumbnail" style={ {backgroundImage: `url(${image})`} }></div>
              </div>
              <div className="title">{ title }</div>
              <div className="description">{ description }</div>
              <div className="price">{ price } €</div>
            </div>
          </div>
  }       
}
