import styles from '../BonusesPage.module.scss';
import imgDiamond from '@/assets/icon_diamond_white.svg';

export type TBonusCardProps = {
  logo: string;
  caption: string;
  category: string;
  points?: number;
  onClickCard: () => void;
};

export function BonusCard(props: TBonusCardProps) {
  const {
    logo,
    caption,
    category,
    points = 1,
    onClickCard,
  } = props;
  return (
    <article className={styles.card} onClick={onClickCard}>
      <div className={styles.cardTop}>
        <p className={styles.category}>{category}</p>
        <div className={styles.diamond}>
            <p className={styles.titleDiamond}>{points}</p>
            <img src={imgDiamond} className={styles.imgDiamond} alt="diamond" />
        </div>
      </div>
      <img className={styles.logo} src={logo} alt="Логотип" />
      <p className={styles.caption}>{caption}</p>
    </article>
  );
};