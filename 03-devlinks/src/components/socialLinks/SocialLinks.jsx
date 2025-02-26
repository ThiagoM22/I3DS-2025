import styles from "./SocialLinks.module.css"

const SocialLinks = ({link, icon}) => {
  return (
   <a href={link} id={styles.socialLinks}><ion-icon name={icon}></ion-icon></a>
  )
}

export default SocialLinks