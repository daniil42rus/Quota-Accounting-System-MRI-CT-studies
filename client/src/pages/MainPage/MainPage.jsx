import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import styles from './mainpage.module.css';

export const MainPage = () => {
	const [date, setDate] = useState(new Date());

	const clickDay = () => {
		let newDate = new Date();
		let days = [];
		// let daysWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
		// console.log(daysWeek[newDate.getDay()]);

		days.push(date.toLocaleDateString(newDate.setDate(date.getDate())));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 1)));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 2)));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 3)));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 4)));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 5)));
		days.push(date.toLocaleDateString(newDate.setDate(date.getDate() + 6)));

		return days;
	};

	const days = clickDay();

	return (
		<div className={styles.mainpage__contetnt}>
			<div className={styles.left}>
				<h2 className={styles.left__heading}>Расписание и запись пациентов</h2>
				<div className={styles.designations}>
					<span className={styles.kt}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="5" cy="5" r="5" fill="#B5FFC9" />
						</svg>
						КТ
					</span>
					<span className={styles.mrt}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="5" cy="5" r="5" fill="#FEE355" />
						</svg>
						МРТ
					</span>
					<span className={styles.open}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="5" cy="5" r="5" fill="#FFB9B9" />
						</svg>
						Свободная запись
					</span>
				</div>
				<ul className={styles.list__days}>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[0]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[1]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[2]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[3]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[4]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[5]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
					<li className={styles.list__items}>
						<span className={styles.items__day}>{days[6]}</span>
						<span className={styles.items__rec}>0 записей</span>
						<span className={styles.items__free}>0 свободных квот</span>
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				<Calendar onChange={setDate} value={date} />
			</div>
		</div>
	);
};
