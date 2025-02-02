import clsx from 'clsx';
import styles from './BonusesPage.module.scss';
import { SectionVolunteerBonuses, TBonusCardProps } from '@/components/Motivation/SectionVolunteerBonuses/SectionVolunteerBonuses';

export type BonusesPageProps = {
	className?: string;
	data: {result:TBonusCardProps[]}
};

export function BonusesPage({ className, data }: BonusesPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="BonusesPage"
		>
			<SectionVolunteerBonuses bonusCardProps={data.result} tasksLink='https://ya.ru/'></SectionVolunteerBonuses>
			<div>
				Заглушка для формы отправки вопроса
			</div>
		</div>
		
	);
}
