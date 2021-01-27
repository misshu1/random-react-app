import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';

const StyledButton = styled(
    ({ icon, backgroundColor, backgroundHoverColor, color, ...props }) => {
        return <Button {...props} classes={{ disabled: 'disabled' }} />;
    }
)`
    && {
        position: relative;
        overflow: hidden;
        cursor: default;
        background-color: ${({ backgroundColor }) => backgroundColor};
        color: ${({ color }) => color};

        ${({ icon }) =>
            icon &&
            css`
                padding-left: 3rem;

                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 2.5rem;
                    transition: background 0.2s ease-in-out;
                    border-top-right-radius: 0 0;
                    border-bottom-right-radius: 37% 100%;
                    background: #cf6900;
                }
            `};
    }

    &&:hover {
        background-color: ${({ backgroundHoverColor }) => backgroundHoverColor};
    }

    &.disabled {
        filter: grayscale(1);
        color: #d6d8de !important;
    }
`;

export const PrimaryButton = ({
    backgroundColor,
    backgroundHoverColor,
    color,
    loading,
    disabled,
    fontIcon,
    svgIcon,
    ...props
}) => {
    return (
        <StyledButton
            {...props}
            icon={!!fontIcon || !!svgIcon}
            disabled={disabled || loading}
            backgroundColor={backgroundColor || '#009bce'}
            backgroundHoverColor={backgroundHoverColor || '#0668c9'}
            color={color || '#fff'}
        >
            {(!!fontIcon || !!svgIcon) && (
                <div className='icon'>
                    {!loading && (
                        <>
                            {svgIcon && svgIcon}
                            {fontIcon && (
                                <FontAwesomeIcon icon={fontIcon} size='lg' />
                            )}
                        </>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            icon={['fas', 'spinner']}
                            pulse
                            size='lg'
                        />
                    )}
                </div>
            )}
            {props.children}
        </StyledButton>
    );
};
