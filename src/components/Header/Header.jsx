import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import css from './style.module.css';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #E44848;
  }
`;

const Header = () => {
    return (
        <section className={css.header}>
            <div className={css.logo}>
                <Icon iconName='icon-logo' width="44" height="44" />
                <h1 className={css.title}>McCamper Rent</h1>
            </div>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/catalog">Catalog</StyledLink>
                <StyledLink to="/favorites">Favorites</StyledLink>
            </nav>
        </section>
    );
};

export default Header;