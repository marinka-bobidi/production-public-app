import nkoPic1 from '@/assets/nko_lavka_radostei.png'
import stepsPic1 from '@/assets/icon-nko-HowToWorkStep1.svg'
import stepsPic2 from '@/assets/icon-nko-HowToWorkStep2.svg'
import stepsPic3 from '@/assets/icon-nko-HowToWorkStep3.svg'
import stepsPic4 from '@/assets/icon-nko-HowToWorkStep4.svg'
import stepsPic5 from '@/assets/icon-nko-HowToWorkStep5.svg'


 export const values =  [
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
		]
	
export const nkoCardsData = [
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
			{image: nkoPic1,
				name: 'Название фонда',
				description: 'описание фонда',
				category: 'Категория',
			},
			{image: nkoPic1,
				name: 'Название фонда',
				description: 'описание фонда',
				category: 'Категория',
			}
		]

export const howToWorkSteps = [
	{
		icon: stepsPic1,
		text: 'Зарегистрируйтесь на платформе и заполните анкету',
		countStep: 1,
	},
	{
		icon: stepsPic2,
		text: 'Дождитесь проверки профиля — обычно это занимает до 2 дней',
		countStep: 2,
	},
	{
		icon: stepsPic3,
		text: 'Создайте задание и ждите откликов от волонтеров',
		countStep: 3,
	},
	{
		icon: stepsPic4,
		text: 'Выберите подходящего волонтера исполнителем задания и напишите ему',
		countStep: 4,
	},
	{
		icon: stepsPic5,
		text: 'Обсудите с волонтером все детали работы и ждите результат',
		countStep: 5,
	},
		]

	export const nkoFaqCardProps = [
		{
			title: 'Каким требованиям должна соответствовать НКО?',
			description: '10 важных для нас критериев',
			handleCardClick: () => {
				alert('Click');
			},
		},
		{
			title: 'Откуда в ProCharity приходят волонтёры?',
			description: 'И как мы их проверяем',
			handleCardClick: () => {
				alert('Click');
			},
		},
		{
			title: 'Как НКО получить доступ к ProCharity??',
			description: 'Разбираем процесс регистрации',
			handleCardClick: () => {
				alert('Click');
			},
		},
		{
			title: 'Как вести переписку с волонтерами?',
			description: 'Как общаться с волонтёром, чтобы было легко работать',
			handleCardClick: () => {
				alert('Click');
			},
		},
		{
			title: 'Как работать с задачами?',
			description: 'Публикуем, собираем отклики, выбираем исполнителя',
			handleCardClick: () => {
				alert('Click');
			},
		},
	];
