import { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }

          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(styles["first-level"], {
                [styles["first-level--active"]]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles["second-level-wrapper"]}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <p className={styles["second-level"]} onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </p>
              <div
                className={cn(styles["third-level-wrapper"], {
                  [styles["third-level-wrapper--opened"]]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p.alias}
        href={`/${route}/${p.alias}`}
        className={cn(styles["third-level"], {
          [styles["third-level--active"]]: `/${route}/${p.alias}` === router.asPath,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
