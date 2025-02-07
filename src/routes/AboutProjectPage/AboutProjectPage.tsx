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
      <section className={styles.section}>
        <h2 className={styles.newsTitle}>Новости</h2>
        {loaderData.news.length > 0 ? (
          <div className={styles.newsList}>
            {loaderData.news.map((item, index) => (
              <div key={index} className={styles.newsCard}>
                <img src={item.imgUrl} alt={item.alt} className={styles.newsImage} />
                <div className={styles.newsContent}>
                  <p className={styles.newsText}>{item.text}</p>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.placeholder}>Новостей пока нет.</p>
        )}
        <a href="/news" className={styles.newsLink}>
          Все новости →
        </a>
      </section>

      {/* Блок команды */}
      <section className={styles.section}>
        <div className={clsx(styles.wrapper)}>
          <h2 className={styles.title}>Команда</h2>
          <nav className={styles.menu}>
            <button className={styles.tabs}>Procharity</button>
            <button className={styles.tabs}>Разработка</button>
            <button className={styles.tabs}>Волонтеры</button>
          </nav>
          {loaderData.team.length > 0 ? (
            <div className={styles.content}>
              {loaderData.team.map((member, index) => (
                <div key={index} className={styles.cardsList_item}>
                  <div></div> {/* Заглушка для картинки */}
                  <div>
                    <p className={styles.card__name}>
                      {member.fistName} {member.lastName}
                    </p>
                    <p className={styles.card__category}>{member.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.placeholder}>Команда пока не добавлена.</p>
          )}
        </div>
      </section>

      {/* Блок документов */}
      <section className={styles.section}>
        <div className={clsx(styles.wrapper)}>
          <h2 className={styles.documentsTitle}>Документы и реквизиты</h2>
          {loaderData.documents.length > 0 ? (
            <ul className={styles.documentsList}>
              {loaderData.documents.map((doc, index) => (
                <li key={index} className={styles.list__container_item}>
                  <div className={styles.documentIcon}>{doc.extention.toUpperCase()}</div>
                  <div className={styles.documentInfo}>
                    <a
                      href={doc.link}
                      className={styles.documentName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.name}
                    </a>
                    <span className={styles.documentSize}>{doc.size}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.placeholder}>Документы пока отсутствуют.</p>
          )}
        </div>
      </section>

      {/* Блок контактов */}
      <section className={styles.section}>
        <div className={clsx(styles.wrapper)}>
          <h2 className={styles.title}>Контакты</h2>
          {loaderData.contacts.length > 0 ? (
            <ul className={styles.items}>
              {loaderData.contacts.map((contact, index) => (
                <li key={index} className={styles.subtitle}>
                  <strong>{contact.type}:</strong> {contact.value}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.placeholder}>Контакты пока не указаны.</p>
          )}
        </div>
      </section>
    </div>
  );
}