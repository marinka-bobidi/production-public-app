import clsx from "clsx";
import styles from './SectionVolunteerBonuses.module.scss';
import imgDiamond from '@/assets/icon_diamond_white.svg';
import { Anchor, Title, Text } from "@charitypro/ui-kit";

export type SectionVolunteerBonusesProps = {
  className?: string;
  bonusCardProps: TBonusCardProps[];
  tasksLink: string;
};

export type TBonusCardProps = {
  logo: string;
  caption: string;
  category: string;
  points?: number;
  onClickCard: () => void;
};

function BonusCard(props: TBonusCardProps) {
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


export function SectionVolunteerBonuses({ className, bonusCardProps, tasksLink }: SectionVolunteerBonusesProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionVolunteerBonuses">
    <div className={styles.text}>
      <Title Tag="h1">Бонусы партнеров</Title>
      <Text Tag="p">
      Волонтерство — это безвозмездно, но мы с нашими партнерами хотим выразить волонтерам нашу признательность за участие и наградить дружеским бонусом.
      </Text>
      <Text Tag="p">
      По результатам выполненных <Anchor className={styles.link} href={tasksLink}>заданий</Anchor>, в зависимости от накопленных баллов, волонтеры могут выбрать соответствующий бонус
      </Text>
    </div>
    <div className={styles.bonusCards}>
      { bonusCardProps?.map((prop, index) => (
        <BonusCard {...prop} key={index} />
      ))
      }
    </div>
  </div>;
}