import clsx from 'clsx';
import styles from './VolunteerDetailsPage.module.scss';
import { Main } from '@/components/Volunteer/Main/Main';
import { mockData, mockReviewsData } from './mock';
import { Reviews } from '@/components/Volunteer/Reviews/Reviews';
export type VolunteerDetailsPageProps = {
	className?: string;
};

export function VolunteerDetailsPage({ className }: VolunteerDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="VolunteerDetailsPage"
		>
			<Main props={mockData}></Main>
			<Reviews props={mockReviewsData} />
			<div>
				<a>Хочу стать волонтером</a>
			</div>
		</div>
	);
}
