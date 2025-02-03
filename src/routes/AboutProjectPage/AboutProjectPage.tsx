import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './AboutProjectPage.module.scss';
import { SectionHeroAboutProject } from '@/components/Hero/SectionHeroAboutProject/SectionHeroAboutProject';
import { StaticNews, StaticTeam, StaticDocuments, StaticContacts } from '@charitypro/ui-kit';
import { LoaderData } from './mock';

import { useLoaderData } from 'react-router-dom';

export type AboutProjectPageProps = {
  className?: string;
};

export function AboutProjectPage({ className }: AboutProjectPageProps) {
	const loaderData = useLoaderData<LoaderData>(); // Используем тип LoaderData для данных
  
	return (
	  <div className={clsx(className, styles.container)}>
		<nav className={styles.menu}>
		  <Link to="team">Команда</Link>
		  <Link to="events">Блог</Link>
		  <Link to="documents_and_requisites">Документы</Link>
		  <Link to="partners">Партнеры</Link>
		  <Link to="contacts">Контакты</Link>
		  <Link to="donation">Пожертвования</Link>
		  <Link to="volunteers_list">Волонтеры</Link>
		  <Link to="foundations_list">Фонды</Link>
		  <Link to="company_list">Компании</Link>
		</nav>
		<Outlet />
		<SectionHeroAboutProject />
		<StaticNews data={loaderData.news} />
		<StaticTeam data={loaderData.team} />
		<StaticDocuments data={loaderData.documents} />
		<StaticContacts data={loaderData.contacts} />
	  </div>
	);
  }