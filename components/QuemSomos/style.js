import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1170px;
    width: 100%;
    margin: 3rem auto;
    display: flex;
    align-items: center;

    .sec2__img {
        display: flex;

        .sec2__img1 {
            padding-right: 1rem;
        }
        .sec2__img2 {
            padding-top: 1.3rem;
        }
    }
    .sec2__text {
        max-width: 530px;
        width: 100%;
        margin-left: 3.5rem;

        h2 {
            font-weight: bold;
            font-family: 'Raleway', sans-serif;
            font-size: 2.8rem;
            color: ${({theme}) => theme.primary};
            line-height: 0.5;
            margin-bottom: 1rem;
        }
        h3 {
            font-family: 'Raleway', sans-serif;
            font-size: 1.8rem;
            color: ${({theme}) => theme.primary};
            margin-bottom: 2rem;
        }
        p {
            font-family: 'Raleway', sans-serif;
            font-size: 1.25rem;
            color: ${({theme}) => theme.secondary};
            line-height: 30px;
            margin-bottom: 1rem;
            text-align: justify;
        }

        a {
            color: ${({theme}) => theme.primary};
            border: 1px solid ${({theme}) => theme.primary};
            width: 230px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Raleway', sans-serif;
            font-size: 1.25rem;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 35px;
            margin-top: 4rem;
        }
    }
`;