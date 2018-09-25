import React, { Component } from 'react';
import PhoneDetailComponent from './components/PhoneDetailComponent'
import PhoneListContainer from './components/PhoneListContainer'
import './App.css';
import {connect} from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.hideCardDetail = this.hideCardDetail.bind(this) 
    this.showCardDetail = this.showCardDetail.bind(this) 
  }
  hideCardDetail(){
    this.props.dispatch({ 
      type: 'HIDE_MODAL' 
    })
  }
  showCardDetail( id ){
    this.props.dispatch({ 
      type: 'SHOW_MODAL',
      payload: id 
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lista de móviles disponibles</h1>
        </header>
        <div className="container">
          <PhoneListContainer showCardDetail={ this.showCardDetail } />
          <PhoneDetailComponent  
            phone={ this.props.modal.phoneSelected ? this.props.phones.find((element)=> {
              return element.id === this.props.modal.phoneSelected;
            }) : 0 }
            hideCardDetail={ this.hideCardDetail }
            visible={ this.props.modal.modalShowed }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return state;
};
export default connect ( mapStateToProps )( App );

