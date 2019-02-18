import React from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from './components/common/loadingDots';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Header ({loading}) {
    return <nav><NavLink exact to="/" activeClassName="active">Home</NavLink> | <NavLink to="/courses" activeClassName="active">Courses</NavLink> | <NavLink to="/about" activeClassName="active">About</NavLink>
    {loading && <LoadingDots interval={100} dots={20} />}
    </nav>;
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}
export default connect(mapStateToProps)(Header);