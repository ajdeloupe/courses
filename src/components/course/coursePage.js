import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
import CourseList from './courseList';
import {withRouter} from 'react-router-dom';
class Courses extends React.Component {
    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage() {
        this.props.history.push('/course');
    }
    render() {
        const {courses} = this.props;
        return<div>
            <h1>Courses</h1>
            <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
           <CourseList courses={courses} />
            
        </div>;
    }
}
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object
};
function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Courses));