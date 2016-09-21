import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import {Pagination} from 'react-bootstrap';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
    this.context.router.push({
      pathname: '/courses',
      query: { activePage: eventKey }
    });
  }

  render() {
    const {courses} = this.props;
    let active = (this.state) ? this.state.activePage: 1;
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add curse"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={20}
          maxButtons={5}
          activePage={active}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  activePage: PropTypes.number
};

CoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursePage);
