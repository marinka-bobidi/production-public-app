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
		text: 'Выбери подходящую задачу и откликнись на неё',
		countStep: 3,
	},
	{
		icon: stepsPic4,
		text: 'Не стесняйся задавать вопросы и предлагать новые идеи!',
		countStep: 4,
	},
	{
		icon: stepsPic5,
		text: 'Выполняй задачи, получай опыт и бонусы от партнеров',
		countStep: 5,
	},
		]

	export const nkoFaqCardProps = [
		{
			title: 'Проверяет ли ProCharity фонды?',
			description: 'Спойлер —  да. Рассказываем о нашем механизме контроля',
			handleCardClick: () => {
				alert('Клик на карточку');
			},
		},
		{
			title: 'Как заполнить профиль и начать помогать?',
			description: '5 советов по самопрезентации волонтёра',
			handleCardClick: () => {
				alert('Клик на карточку');
			},
		},
		{
			title: 'Как вести переписку с представителями НКО?',
			description: 'Как общаться с заказчиком, чтобы было легко работать',
			handleCardClick: () => {
				alert('Клик на карточку');
			},
		},
		{
			title: 'Как начисляются баллы?',
			description: 'И что можно за них получить',
			handleCardClick: () => {
				alert('Клик на карточку');
			},
		},
		{
			title: 'Как начисляются баллы?',
			description: 'И что можно за них получить',
			handleCardClick: () => {
				alert('Клик на карточку');
			},
		},
	];
