import clsx from 'clsx';
import styles from './Main.module.scss';

export type MainLoader = {
	name: string;
	date: string;
	location: string;
	done: number;
	rating: number;
	avatar: string;
};
export type MainProps = {
	className?: string;
	props: MainLoader;
};

export function Main({ className, props }: MainProps) {
	return (
		<div className={clsx(styles.container, className)}>
			<div>
				<div>
					<img alt="картинка" src={props.avatar} />
				</div>
				<div>
					<div>
						<h1> {props.name} </h1>
						<p> Дата регистрации: {props.date}</p>
						<p> Местоположение: {props.location}</p>
					</div>
					<div>
						<div>
							<span> {props.done} </span>
							<span>Задания выполнено</span>
						</div>
						<div>
							<span>{props.rating}</span>
							<span>Рейтинг</span>
						</div>
						<div>
							<ul>
								<li></li>
							</ul>
						</div>
						<p>
							О том, как составляется рейтинг, откуда берется количество часов и
							кому видна эта информация, читай в разделе{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
