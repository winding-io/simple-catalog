import React, { Component } from 'react';
import { fetchPhones } from "../modules/phones/actionCreators";
import {connect} from "react-redux";

class PhoneListContainer extends Component{
  componentDidMount(){
    this.props.dispatch( fetchPhones() );
  }
  render(){
    const { phones, showCardDetail } = this.props;
    const phoneList = phones.length ? phones.map(phone => ( 
        <div className="card-wrapper" onClick={() => showCardDetail( phone.id ) }  key={ phone.id }>
          <div className="card">
            <div className="wrapper-thumbnail">
              <div className="thumbnail" style={ {backgroundImage: `url(${phone.image})`} }></div>
            </div>
            <div className="title">{ phone.title }</div>
            <div className="description">{ phone.description }</div>
            <div className="price">{ phone.price } €</div>
          </div>
        </div>
      ) ) : (<div className="fullwidth">Cargando teléfonos... <img src="../../images/loader.svg" width="60" alt="" /></div>);
    
    return <div className="phone-list-container"> { phoneList } </div>
  }
}
const mapStateToProps=(state)=>{
    return state;
};
export default connect ( mapStateToProps )( PhoneListContainer );
