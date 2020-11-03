import styled from 'styled-components';

export const InputStyle = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

export const LabelStyle = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;

export const InputElementStyle = styled.input`
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;


    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;

export const TextAreaElementStyle = styled.textarea`
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;

export const SelectElementStyle = styled.select`
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;