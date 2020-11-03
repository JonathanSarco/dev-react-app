import styled from 'styled-components';

export const BuildControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

export const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

export const ButtonControl = styled.button`
    display: block;
    font: inherit;
    padding: 5px;
    marging: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;  
    background-color: ${props => props.backColor};
    color: white;

    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }

    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }

    &:hover {
        background-color: ${props => props.hoverColor};
        color: white;    
    }

    &:active {
        background-color: ${props => props.hoverColor}
        color: white;
    }
`;
