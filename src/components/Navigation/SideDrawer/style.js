import styled from 'styled-components';

export const SideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    heigth: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px) {
        display: none;
    }
`;

export const Open = {
    "transform": "translateX(0)"
};

export const Close = {
    "transform": "translateX(-100%)"
};

export const LogoContainer = styled.div`
    margin-bottom: 23px;
`;