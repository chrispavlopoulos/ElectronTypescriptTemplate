import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }: any) => Math.floor(size / 0.66)}px;
    height: ${({ size }: any) => Math.floor(size / 0.66)}px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    margin-left: ${({ shovedRight }: any) => (shovedRight ? 'auto' : 0)};
    font-size: ${({ size }: any) => size || '16'}px;

    &:hover {
        ${({ soft, disabled }: any) =>
            !soft && !disabled
                ? css`
                      background-color: rgba(255, 255, 255, 0.2);
                  `
                : null}
    }
    &:active {
        ${({ soft, disabled }: any) =>
            !soft && !disabled
                ? css`
                      background-color: rgba(255, 255, 255, 0.4);
                  `
                : null}
    }

    > svg {
        ${({ soft, disabled }: any) =>
            soft || disabled
                ? css`
                      color: gray;
                      transition: color 0.2s ease-in-out;
                  `
                : null}
    }

    &:hover > svg {
        ${({ soft, hoverColor, disabled }: any) =>
            soft && !disabled
                ? css`
                      color: ${hoverColor || 'white'};
                  `
                : null}
    }
`;

const IconButton = ({
    children,
    shovedRight,
    soft,
    hoverColor,
    disabled,
    size = 16,
    onClick = () => {},
    ...rest
}: {
    children: any;
    shovedRight: boolean;
    soft: boolean;
    hoverColor: string;
    disabled: boolean;
    size: number;
    onClick: (e: Event) => void;
}) => {
    return (
        <Wrapper
            {...rest}
            size={size}
            shovedRight={shovedRight}
            soft={soft}
            hoverColor={hoverColor}
            disabled={disabled}
            onClick={(e: Event) => {
                if (!disabled) {
                    onClick(e);
                }
            }}
        >
            {children}
        </Wrapper>
    );
};

export default IconButton;
