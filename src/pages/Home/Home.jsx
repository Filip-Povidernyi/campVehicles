import { NavLink } from "react-router-dom";
import css from "./style.module.css";
import styled from "styled-components";


const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    padding: 8px 8px;
    width: 173px;
    height: 48px;
    border-radius: 200px;
    background-color: #E44848;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #D84343;
    }
`;

const Home = () => {
    return (
        <section className={css.section}>
            <div className={css.hero}>
                <h1 className={css.title}>Будинки на колесах</h1>
                <p className={css.description}>Відпустка, рибалка або просто відпочинок з друзями?
                    Відчуйте свободу вибору та переміщення з нашими трейлерами!
                </p>
                <StyledLink to="/catalog">View Now</StyledLink>
            </div>
        </section>
    )
};

export default Home;