import styles from "./Links.module.css"

const Links = ({children, link}) => {
  return (
    <li id={styles.links}>
        <a href={link}>{children}</a>
    </li>
  )
}

export default Links