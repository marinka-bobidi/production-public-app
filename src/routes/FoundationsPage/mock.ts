import { FoundationsPageProps } from '@/routes/FoundationsPage/FoundationsPage'
import nkoPic1 from '@/assets/nko_lavka_radostei.png'


export default {
	data: {
		stats: [
			{
				description: 'Задачи выполнено за месяц',
				counter: 249,
			},
			{
				description: 'Задачи ждут волонтеров',
				counter: 53,
			},
			{
				description: 'Фонды ищут специалистов',
				counter: 882,
			},
			{
				description: 'Волонтеры зарегистрированы',
				counter: 3877,
			},
			{
				description: 'Компании-партнеры',
				counter: 43,
			},
		],
		nkoCardsData: [
			{image: nkoPic1,
				name: 'Название фонда',
				description: 'описание фонда',
				category: 'Категория',
			},
			{image: nkoPic1,
				name: 'Название фонда',
				description: 'описание фонда',
				category: 'Категория',
			},
		],
		howToWorkSteps: [
			{}
		]
			
	}
	} as FoundationsPageProps
		
