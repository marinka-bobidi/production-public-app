import { MainLoader } from '@/components/Volunteer/Main/Main';
import { reviewsLoader, TReview } from '@/components/Volunteer/Reviews/Reviews';

export const mockData: MainLoader = {
	name: 'Саша Ван Эккер',
	location: 'Москва',
	date: '22.01.2018',
	done: 434,
	rating: 5,
	avatar:
		'https://procharity.ru/upload/resize_cache/iblock/384/160_160_2/6753.png',
};

export const reviewData: TReview = {
	avatar: '',
	name: 'Толмачева Юлияя',
	company: 'ОРБИ',
	description:
		'Большое спасибо за развернутую консультацию, информация очень поможет в нашей будущей работе.',
};

export const mockReviewsData: reviewsLoader = {
	achievements: [
		'https://procharity.ru/upload/medialibrary/ACHIEVE_HOPE_NOVICE.svg',
		'https://procharity.ru/upload/medialibrary/ACHIEVE_SUPERHERO.svg',
	],
	speciality: ['Тексты', 'Маркетинг', 'Обучение'],
	motivation: 'мне нравится помогать тем, кому это действительно нужно',
	perks: 'Если кратко...',
	reviews: [reviewData],
};
