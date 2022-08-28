import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
	// const [title, setTitle] = useState(props.title);
	// useState zawsze zwraca tablice z dwoma elementami
	// pierwszy element to aktulana wartość, a drugi to funkcja do aktualizacj tego
	// hooks jak useState i inne podobne funkcje mogą być wywoływne tylko wewnątrz takiej funkcji

	// const clickHandler = () => {
	// 	setTitle('Updated!');
	// 	console.log(title);
	// };

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Change Title</button> */}
		</Card>
	);
};

export default ExpenseItem;
