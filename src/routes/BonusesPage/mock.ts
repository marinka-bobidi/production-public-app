import imageDodoPizza from "@/assets/img_dodo_pizza.png";
import imageAzbuka from "@/assets/img_azbuca_atticus.png";
import imageBbe from "@/assets/img_bbe_library.png";
import { TBonusCardProps } from "@/components/Motivation/SectionVolunteerBonuses/SectionVolunteerBonuses";

export const bonusCardProps:TBonusCardProps[] =  [
  {
    logo: imageDodoPizza,
    caption: "Додокоины в Додо Пицца",
    category: "Кафе и рестораны",
    points: 2,
    onClickCard: () => alert("Клик по карточке Default"),
  },
  {
    logo: imageAzbuka,
    caption: "Промокод на книги",
    category: "Книги",
    points: 5,
    onClickCard: () => alert("Клик по карточке Default"),
  },
  {
    logo: imageBbe,
    caption: "Доступ к дизайн-библиотеке на месяц",
    category: "Образование",
    points: 8,
    onClickCard: () => alert("Клик по карточке Default"),
  },
]
