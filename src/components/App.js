import React,{ PropTypes, Component } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    let HeaderOut = "";
    if (!this.props.guest) {
      HeaderOut = <Header loading={this.props.loading} />;
    }
    return(
      <div className="container-fluid">
        {HeaderOut}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsinProgress > 0,
    guest: state.quest
  };
}

export default connect(mapStateToProps)(App);
