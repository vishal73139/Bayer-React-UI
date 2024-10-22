import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import withRouter from 'components/Common/withRouter';

//i18n
import { withTranslation } from 'react-i18next';
import SidebarContent from './SidebarContent';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
const Sidebar = props => {
	return (
		<React.Fragment>
			<div className="vertical-menu">
				<div className="navbar-brand-box">
					<Link to="/" className="logo logo-dark">
						<span className="logo-sm text-white text-bold">
							<img src={logo} alt="" height="22" /> BAYER
						</span>
						<span className="logo-lg text-white text-bold">
							<img src={logo} alt="" height="17" /> BAYER
						</span>
					</Link>

					<Link to="/" className="logo logo-light">
						<span className="logo-sm text-white text-bold">
							<img src={logo} alt="" height="22" /> BAYER
						</span>
						<span className="logo-lg text-white text-bold">
							<img src={logo} alt="" height="19" /> BAYER
						</span>
					</Link>
				</div>
				<div data-simplebar className="h-100">
					{props.type !== 'condensed' ? <SidebarContent /> : <SidebarContent />}
				</div>
				<div className="sidebar-background"></div>
			</div>
		</React.Fragment>
	);
};

Sidebar.propTypes = {
	type: PropTypes.string
};

const mapStatetoProps = state => {
	return {
		layout: state.Layout
	};
};
export default connect(mapStatetoProps, {})(withRouter(withTranslation()(Sidebar)));
