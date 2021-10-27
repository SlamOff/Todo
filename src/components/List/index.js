import './index.css';
import { useState, useEffect } from 'react';
import ListItem from '../ListItem';

const List = () => {
	const URL = 'https://jsonplaceholder.typicode.com/todos';
	const [ state, setState ] = useState([]);

	useEffect(async () => {
		await fetch(URL)
		.then(response => response.json())
		.then(data => {
			setState(data);
		});
	}, []);

	return(
		<div className="container">
			<ul className="list">
				{
					state.map((item, i) => {
						console.log(item);
						return <ListItem key={item.id} data={item} />;
					})
				}
			</ul>
		</div>
	)
}

export default List;