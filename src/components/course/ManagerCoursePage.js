import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedDropDown} from '../selectors/selectors';

export class ManagerCoursePage extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        course: Object.assign({}, this.props.course),
        errors: {},
        saving: false
      };

      this.updateCourseState = this.updateCourseState.bind(this);
      this.saveCourse = this.saveCourse.bind(this);
      this.removeCourse = this.removeCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.course !== undefined && this.props.course.id != nextProps.course.id) {
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }

    updateCourseState(event) {
      const field = event.target.name;
      let course = this.state.course;
      course[field] = event.target.value;
      return this.setState({course});
    }

    courseFormIsValid() {
      let formIsValid = true;
      let errors = {};

      if (this.state.course.title.length < 5) {
        errors.title = 'Title must be at least 5 characters.';
        formIsValid = false;
      }

      else if (!this.state.course.authorId) {
        errors.authorId = 'Author must be set.';
        formIsValid = false;
      }

      else if (this.state.course.category.length < 5) {
        errors.category = 'Category must be at least 5 characters.';
        formIsValid = false;
      }

      this.setState({errors});
      return formIsValid;
    }

    removeCourse(event) {
      event.preventDefault();
      if (this.state.course.id) {
        this.setState({saving: true});
        this.props.actions.removeCourse(this.state.course)
          .then(() => this.redirect('Course delete'))
          .catch(error => {
            toastr.error(error);
            this.setState({saving: false});
          });
      } else {
        toastr.error('Course not created yeat!');
      }
    }

    saveCourse(event) {
      event.preventDefault();
      if(!this.courseFormIsValid()) {
        return;
      }
      this.setState({saving: true});
      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect('Course saved'))
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect(message) {
      this.setState({saving: false});
      if (message)
       toastr.success(message);
      this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
              allAuthors={this.props.authors}
              course={this.state.course}
              errors={this.state.errors}
              saving={this.state.saving}
              onChange={this.updateCourseState}
              onSave={this.saveCourse}
              onRemove={this.removeCourse}
            />
        );
    }
}

ManagerCoursePage.propTypes = {
  course: PropTypes.object,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManagerCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if(course) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    if(courseId && state.courses.length > 0) {
      course = getCourseById(state.courses, courseId);
    }

    return {
        course: course,
        authors: authorsFormattedDropDown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerCoursePage);
