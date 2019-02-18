import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './courseForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import * as courseActions from '../../actions/courseActions';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }
    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};
        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }
        this.setState({errors:errors});
        return formIsValid;
    }
    saveCourse(event) {
        event.preventDefault();
        if (!this.courseFormIsValid()) {
            return;
        }
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                this.setState({saving: false});
                toastr.error(error);
            });
        
    }
    redirect() {
        this.setState({saving: false});
        toastr.success('Course Saved');
        this.props.history.push('/courses');
    }
    render() {
        return (
            <CourseForm course={this.state.course} onChange={this.updateCourseState} onSave={this.saveCourse} errors={this.state.errors} allAuthors={this.props.authors} saving={this.state.saving}/>
        );
    }
}
ManageCoursePage.propTypes ={
    course: PropTypes.object.isRequired,
    errors: PropTypes.object,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object,
    history: PropTypes.object
};
function getCourseById(courses, courseId) {

    const course = courses.filter(o => o.id == courseId);
    if(course.length) return course[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;
    let course = {id: '', watchHref: '', title: '', authorId:'',length: '', category:''};
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    
    
    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps)(ManageCoursePage));