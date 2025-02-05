import { IStoryCard } from '@/components/Histories/types';
import { DataHowToWorkStep } from '@/components/HowTo/types';
import { FAQCardProps } from '@/components/Questions/types';

type CardKPI = {
	counter: number,
	description: string,
  }

export type LoaderData = {
	stats: CardKPI[];
	nkoFaqCard: FAQCardProps[];
	howToWorkSteps: DataHowToWorkStep[];
	nkoCardsData: IStoryCard[];
	
};
