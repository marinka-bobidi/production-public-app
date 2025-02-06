import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionVolunteerBonuses } from './SectionVolunteerBonuses';

const meta = {
	title: 'New/SectionVolunteerBonuses',
	component: SectionVolunteerBonuses,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
} satisfies Meta<typeof SectionVolunteerBonuses>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	args: {
		className:'',
		tasksLink: 'https://ya.ru/',
		bonusCardProps: [
			{
				logo: 'imageDodoPizza',
				caption: "Додокоины в Додо Пицца",
				category: "Кафе и рестораны",
				points: 2,
				onClickCard: () => alert("Клик по карточке Default"),
			},
			{
				logo: 'imageAzbuka',
				caption: "Промокод на книги",
				category: "Книги",
				points: 5,
				onClickCard: () => alert("Клик по карточке Default"),
			},
			{
				logo: 'imageBbe',
				caption: "Доступ к дизайн-библиотеке на месяц",
				category: "Образование",
				points: 8,
				onClickCard: () => alert("Клик по карточке Default"),
			},
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionVolunteerBonuses');
		await expect(element).toBeInTheDocument();
	},
};
