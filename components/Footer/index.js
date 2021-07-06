import styles from "./styles.module.scss";

export default function Footer(){
    return(
        <footer className={styles.footer}>
           <p>Built with ❤️ by <a href="https://github.com/ambx">ambx</a></p>
        </footer>
    )
}