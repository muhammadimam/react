import React from 'react';

const List = props => {
	const list = props.items.map((item, index) => {
		return (
			<li key={index}>
				{item}
			</li>
		);
	})

	return (
		<ul>{list}</ul>
	);
}

export default List;