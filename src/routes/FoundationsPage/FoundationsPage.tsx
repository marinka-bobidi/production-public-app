import clsx from 'clsx';
import styles from './FoundationsPage.module.scss';

import { SectionHeroFund } from '@/components/Hero/SectionHeroFund/SectionHeroFund';
import { SectionFundHistories } from '@/components/Histories/SectionFundHistories/SectionFundHistories';
import { SectionHowToFund } from '@/components/HowTo/SectionHowToFund/SectionHowToFund';
import { SectionPartners } from '@/components/SectionPartners/SectionPartners';
import { SectionStats } from '@/components/SectionStats/SectionStats';
import { SectionFundQuestions } from '@/components/Questions/SectionFundQuestions/SectionFundQuestions';

export type FoundationsPageProps = {
	className?: string;
	// data: LoaderData
};

export function FoundationsPage({ className}: FoundationsPageProps) {
	
	return (
		<div className={clsx(className, styles.container)} data-testid="FoundationsPage">
			<SectionHeroFund onClick={()=> {}}/>
			<SectionHowToFund nkoDataHowToWorkSteps={[]} onClick={()=> {}}/>
			<SectionPartners/>
			<SectionFundQuestions nkoFaqCardProps={[]}/>
			<SectionFundHistories nkoCardsData={[]} onClick={()=>{}}/>
			<SectionStats values={[]}/>	
		</div>
	);
}

