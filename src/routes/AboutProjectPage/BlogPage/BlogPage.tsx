import clsx from 'clsx';
import styles from './BlogPage.module.scss';
import { LoaderData } from './loaderData.tsx';
import arrowRight from '@/assets/icon_arrow_path.svg';

export type NewsCard = {
	id: string;
	picture?: string;
	description?: string;
	date?: string;
	alt?: string;
	handleCardClick?: () => void;
};

export type BlogPageProps = {
	className?: string;
	data: LoaderData;
	allNewsLink?: string;
};

export function BlogPage({ className, data, allNewsLink }: BlogPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="BlogPage">
			<div className={styles.box}>
				<h1 className={styles.title}>Новости</h1>
				<ul className={styles.list}>
					{data.news.map((prop) => (
						<li
							className={styles.cardElement}
							onClick={prop.handleCardClick}
							key={prop.id}
						>
							<img className={styles.img} src={prop.picture} alt={prop.alt} />
							<p className={styles.cardDescription}>{prop.description}</p>
							<p className={styles.cardDate}>{prop.date}</p>
						</li>
					))}
				</ul>
				<a href={allNewsLink} className={styles.linkWrapper}>
					<p className={styles.linkText}>Все новости</p>
					<img
						className={styles.arrowRight}
						src={arrowRight}
						alt="Стрелка вправо"
					/>
				</a>
			</div>
		</div>
	);
}
