import clsx from 'clsx';
import styles from './FoundationsPage.module.scss';
import { Link, Outlet } from 'react-router';
import { SectionHeroFund } from '@/components/Hero/SectionHeroFund/SectionHeroFund';
import { SectionFundHistories } from '@/components/Histories/SectionFundHistories/SectionFundHistories';
import { SectionHowToFund } from '@/components/HowTo/SectionHowToFund/SectionHowToFund';
import { SectionPartners } from '@/components/SectionPartners/SectionPartners';
import { SectionStats } from '@/components/SectionStats/SectionStats';
import { SectionFundQuestions } from '@/components/Questions/SectionFundQuestions/SectionFundQuestions';
import { LoaderData } from './loaderData';

export type FoundationsPageProps = {
	className?: string;
	data: LoaderData
};

export function FoundationsPage({ className, data}: FoundationsPageProps) {
	console.log(data)
	return (
		<div className={clsx(className, styles.container)} data-testid="FoundationsPage">
			<SectionHeroFund onClick={()=> {}}/>
			<SectionHowToFund nkoDataHowToWorkSteps={data.howToWorkSteps} onClick={()=> {}}/>
			<SectionPartners/>
			<SectionFundQuestions nkoFaqCardProps={data.nkoFaqCard}/>
			<SectionFundHistories nkoCardsData={data.nkoCardsData} onClick={()=>{}}/>
			<SectionStats values={data.stats}/>	
		</div>
	);
}

