import clsx from 'clsx';
import styles from './Reviews.module.scss';

export type TReview = {
	avatar: string;
	name: string;
	company: string;
	description: string;
};
export type reviewsLoader = {
	className?: string;
	achievements: string[];
	speciality: string[];
	motivation: string;
	perks: string;
	reviews: TReview[];
};
export type ReviewsProps = {
	className?: string;
	props: reviewsLoader;
};
export function Reviews({ className, props }: ReviewsProps) {
	const achievements = () => {
		return props.achievements.map((avatar) => {
			return (
				<li key={avatar}>
					<a href={avatar}> {avatar}</a>
				</li>
			);
		});
	};
	const speciality = () => {
		return props.speciality.map((name) => {
			return <li key={name}>{name}</li>;
		});
	};

	const reviews = () => {
		return props.reviews.map((review) => {
			return (
				<div>
					<ul>
						<li>
							<a href={review.avatar}></a>
							<div>
								<p></p>
								<div>
									<p>{review.name}</p>
									<a>{review.company}</a>
									<a>Задание</a>
								</div>
								<p>{review.description}</p>
							</div>
						</li>
					</ul>
				</div>
			);
		});
	};

	return (
		<div className={clsx(styles.container, props.className)}>
			<div>
				<div>
					<ul>{achievements()}</ul>
				</div>
				<div>
					<h5>Специализация</h5>
					<ul>{speciality()}</ul>
				</div>
				<div>
					<h5>Мотивация</h5>
					<div>
						<p>{props.motivation}</p>
					</div>
				</div>
				<div>
					<h5>Навыки и опыт</h5>
					<div>
						<p>{props.perks}</p>
					</div>
				</div>
			</div>
			// Right part
			<div>
				<div>
					<ul>
						<li>
							<a>Отзывы</a>
						</li>
						<li>
							<a>Задачи в работе</a>
						</li>
						<li>
							<a>Завершенные задачи</a>
						</li>
					</ul>
				</div>
				<div>{reviews()}</div>
			</div>
		</div>
	);
}
