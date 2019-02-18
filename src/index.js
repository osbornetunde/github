import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import FileListItem from './fileItem';

const  FileList = ({ files }) => (
	<table className="file-list">
		<tbody>
			{files.map(file => (
				<FileListItem key={file.id} file={file}/>
			))}
		</tbody>
	</table>
	);
FileList.propTypes = {
	files: PropTypes.array
};



const testFiles = [
	{
		id: 1,
		name: 'src',
		type: 'folder',
		updated_at: "2018-12-12 16:38:26",
		latestCommit: {
			message: 'Initial commit'
		}
	},
		{
			id: 2,
			name: 'test',
			type: 'folder',
			updated_at: "2018-12-12 17:43:30",
			latestCommit: {
				message: 'Initial commit'
			}
		},
		{
			id: 3,
			name: 'README',
			type: 'file',
			updated_at: "2018-12-12 20:02:57",
			latestCommit: {
				message: 'Added a readme'
			}
		},
];



ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));

