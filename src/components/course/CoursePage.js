import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursePage);
