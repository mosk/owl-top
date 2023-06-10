import styles from "./TopPage.module.css";
import cn from "classnames";
import { TopPageComponentProps } from "./TopPage.props";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
