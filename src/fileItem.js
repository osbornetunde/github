import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';
import FileName from './filename';
import CommitMessage from './commitMessage';

const FileListItem = ({ file }) => (
				<tr className="file-list-item">
					<td><FileName file={file}/></td>
					<td><CommitMessage commit={file.latestCommit}/></td>
					<td className="age">
						<Time time={file.updated_at}/>
					</td>
				</tr>
		);
	
FileListItem.propTypes = {
	file: PropTypes.object.isRequired
};




export default FileListItem;