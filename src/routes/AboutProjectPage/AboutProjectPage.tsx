import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './AboutProjectPage.module.scss';
import { SectionHeroAboutProject } from '@/components/Hero/SectionHeroAboutProject/SectionHeroAboutProject';
import { LoaderDataType } from './mock';

export type AboutProjectPageProps = {
  className?: string;
  loaderData?: LoaderDataType; // Делаем loaderData необязательным
};

// Значение по умолчанию для безопасного рендеринга
const defaultLoaderData: LoaderDataType = {
  news: [],
  team: [],
  documents: [],
  contacts: [],
};

export function AboutProjectPage({ className, loaderData = defaultLoaderData }: AboutProjectPageProps) {
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

      {/* Блок новостей */}
      <div className={styles.section}>
          <h2 className={styles.title}>Новости</h2>
          <p className={styles.placeholder}>Блоки с новостями и ссылка на страницу новостей</p>
        </div>

      {/* Блок команды */}
        <div className={styles.section}>
          <h2 className={styles.title}>Команда</h2>
          <p className={styles.placeholder}>Список команды</p>
        </div>
      {/* Блок документов */}
      <div className={styles.section}>
          <h2 className={styles.title}>Документы и реквизиты</h2>
          <p className={styles.placeholder}>Небольшие блоки с документами такие как ОГРН , ИНН, устав фонда и т.д.</p>
        </div>

      {/* Блок контактов */}
      <div className={styles.section}>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.placeholder}>Адрес, почта телефоны и т.д.</p>
        </div>
    </div>
  );
}