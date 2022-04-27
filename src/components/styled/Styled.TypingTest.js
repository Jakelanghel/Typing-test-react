import styled from "styled-components"

export const StyledTypingTest = styled.div `
    text-align: center;
    padding: 5rem 0;

    h1 {
        color: ${({theme}) => theme.green};
    }

    textarea {
        font-size: 1rem;
        width: 80%;
        height: 400px;
        border-radius: 10px;
        border: none;
        margin: 2rem 0;
        padding: 1rem 1rem;
        color: ${({theme}) => theme.green};
        background-color: ${({theme}) => theme.grey};
    }

    textarea:disabled {
        color: ${({theme}) => theme.lightGrey};
        background-color: ${({theme}) => theme.blackish};
    }

    .container-actions {
        max-width: 600px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem auto;
        text-align:left
    }

    h2 {
        color: ${({theme}) => theme.green};
        margin-bottom: 1rem;
    }

    span {
        color: ${({theme}) => theme.orange};
        margin-left: .25rem;
    }

    button {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 1rem 2.5rem;
        border: none;
        border-radius: 5px;
        color: ${({theme}) => theme.black};
        background-color: ${({theme}) => theme.orange};

    }



`