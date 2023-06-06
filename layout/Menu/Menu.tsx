import { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <>
      <ul>{menu && menu.map((m) => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}</ul>
    </>
  );
};
