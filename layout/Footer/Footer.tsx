import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <>
      <footer className={cn(className, styles.footer)} {...props}>
        <p>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</p>
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
      </footer>
    </>
  );
};
