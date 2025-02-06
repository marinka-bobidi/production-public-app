export type NewsItem = {
	imgUrl: string;
	alt: string;
	text: string;
	date: string;
};

export type TeamMember = {
	fistname: string;
	lastName: string;
	category: string;
};

export type Document = {
	name: string;
	size: string;
	extention: string;
	link: string;
};

export type Contact = {
	type: string;
	value: string;
};

export type LoaderDataType = {
	news: NewsItem[];
	team: TeamMember[];
	documents: Document[];
	contacts: Contact[];
};

export const LoaderData: LoaderDataType = {
	news: [
		{
			imgUrl: 'path/to/image1.jpg',
			alt: 'News 1',
			text: 'Очень длинный заголовок новости 1',
			date: '16.10.2020',
		},
		{
			imgUrl: 'path/to/image2.jpg',
			alt: 'News 2',
			text: 'Очень длинный заголовок новости 2',
			date: '17.10.2020',
		},
	],
	team: [
		{ fistname: 'John', lastName: 'Doe', category: 'Procharity' },
		{ fistname: 'Jane', lastName: 'Smith', category: 'Разработка' },
	],
	documents: [
		{ name: 'Документ 1', size: '1MB', extention: 'pdf', link: 'link_to_doc1' },
		{
			name: 'Документ 2',
			size: '2MB',
			extention: 'docx',
			link: 'link_to_doc2',
		},
	],
	contacts: [
		{ type: 'Адрес', value: 'Москва, Арбат 35' },
		{ type: 'Электронная почта', value: 'procharity@friends-foundation.com' },
		{ type: 'Телефон', value: '+71234567890' },
	],
};
