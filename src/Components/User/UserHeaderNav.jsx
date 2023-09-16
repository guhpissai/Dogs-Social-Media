import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Postar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserNavHeader.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = ({ setTitle }) => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav}  ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          to="/conta"
          onClick={() => {
            setTitle("Minhas Fotos");
            setMobileMenu(false);
          }}
          end
        >
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink
          to="/conta/estatisticas"
          onClick={() => {
            setTitle("Estatísticas");
            setMobileMenu(false);
          }}
        >
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink
          to="/conta/postar"
          onClick={() => {
            setTitle("Adicionar");
            setMobileMenu(false);
          }}
        >
          <Postar />
          {mobile && "Adicionar"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
