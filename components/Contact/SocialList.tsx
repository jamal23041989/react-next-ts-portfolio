/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/socialListContact.module.scss'

const SocialList = () => (
  <ul className={styles.social__list}>
    <li className={styles.social__list__item}>
      <a href="#" className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>facebook</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__fb}`}>
          <img className={styles.social__list__item__link__img} src="/img/facebook.svg" alt="facebook" />
        </span>
      </a>
    </li>
    <li className={styles.social__list__item}>
      <a href="#" className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>ВКонтакте</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
          <img className={styles.social__list__item__link__img} src="/img/vk.svg" alt="ВКонтакте" />
        </span>
      </a>
    </li>
    <li className={styles.social__list__item}>
      <a href="#" className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>YouTube</span>
        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__yt}`}>
          <img className={styles.social__list__item__link__img} src="/img/youtube.svg" alt="YouTube" />
        </span>
      </a>
    </li>
  </ul>
)

export default SocialList
