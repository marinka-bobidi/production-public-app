import { LoaderData } from './loaderData';
import chessImg from '@/assets/images/img_chess_512.png';

export const blogPageMockData: LoaderData = {
	news: [
		{
			id: '1',
			picture: chessImg,
			description:
				'Из волонтеров в штатные сотрудники: как фонд ОРБИ нашёл юриста на ProCharity',
			date: '06.02.2023',
			alt: 'Изображение',
		},
		{
			id: '2',
			picture: chessImg,
			description:
				'«Правило жизни — быть полезным миру»: как волонтер из Москвы помог детям-сиротам',
			date: '16.12.2022',
			alt: 'Изображение',
		},
		{
			id: '3',
			picture: chessImg,
			description:
				'«Я хочу жить в мире, где существует поддержка»: как Анна Урманова стала волонтером',
			date: '12.12.2022',
			alt: 'Изображение',
		},
	],
};
