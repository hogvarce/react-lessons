import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {

    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add curse"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
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
