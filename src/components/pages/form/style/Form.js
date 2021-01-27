import styled, { css } from 'styled-components';

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0.5rem;

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .error {
            display: block;
            text-align: center;
            font-weight: 900;
            color: red;
            margin: 0;
            min-height: 1.5rem;
        }

        span {
            margin-bottom: 1rem;
        }

        input {
            display: block;
            height: 2rem;
            width: 100%;
            outline: none;
            background: transparent;
            color: #000;
            border: 1px solid #444;
            border-radius: 0.3em;
            padding: 0.5rem;
            margin-bottom: 0.2rem;
        }

        input:hover {
            box-shadow: 0 0 0 1px #444;
            border: 1px solid #444;
        }

        input:focus {
            box-shadow: 0 0 0 1px #d6d8de;
            border: 1px solid #d6d8de;
            input:hover {
                border: 1px solid #d6d8de;
            }
        }

        #email {
            ${({ errors, touched }) =>
                touched.email &&
                errors.email &&
                css`
                    box-shadow: 0 0 0 1px red;
                    border: 1px solid red;
                `}
        }

        #year {
            ${({ errors, touched }) =>
                touched.year &&
                errors.year &&
                css`
                    box-shadow: 0 0 0 1px red;
                    border: 1px solid red;
                `}
        }
    }
`;
