import clsx from 'clsx';
import styles from './BlogPage.module.scss';
import { GoToLink, Title, CardNews, Anchor } from '@charitypro/ui-kit';
import { PreNews } from './type';

export function BlogPage({
	className,
	data,
	allNewsLink,
}: {
	className?: string;
	data: PreNews[];
	allNewsLink?: string;
}) {
	return (
		<div className={clsx(styles.container, className)} data-testid="BlogPage">
			<div className={styles.box}>
				<Title Tag="h1">Новости</Title>
				<ul className={styles.list}>
					{data.map((prop) => (
						<Anchor key={prop.id} href={prop.url}>
							<CardNews
								title={prop.description || ''}
								formAvatar="square"
								infoDate={prop.date}
								userImage={prop.picture}
							/>
						</Anchor>
					))}
				</ul>
				<GoToLink
					className={styles.linkWrapper}
					href={allNewsLink}
					iconPosition="right"
					variant="link"
					Tag={'a'}
				>
					<p className={styles.linkText}>Все новости</p>
				</GoToLink>
			</div>
		</div>
	);
}
