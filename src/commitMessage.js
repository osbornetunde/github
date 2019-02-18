import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



const CommitMessage =  ({ commit }) => (
	<span className="commit-message">
		{commit.message}
	</span>
)

CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired
}

export default CommitMessage