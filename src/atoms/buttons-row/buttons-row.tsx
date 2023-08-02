import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from './buttons-row.module.scss';
import React from "react";

export interface ButtonRowProps extends React.HTMLAttributes<HTMLElement> {
    align?: 'left' | 'center' | 'right' | 'spaceBetween',
    as?: Extract<keyof JSX.IntrinsicElements, 'div' | 'nav'>;
}

export function ButtonsRow({ as, align, children, className, ...rest }: PropsWithChildren<ButtonRowProps>) {

    const Tag = as || 'div';
    const classname = classNames(styles.buttonsRow, {
        [styles.left]: !align || align === 'left',
        [styles.center]: align === 'center',
        [styles.right]: align === 'right',
        [styles.spaceBetween]: align === 'spaceBetween',
    }, className)

    return <Tag className={classname} {...rest}>
        {children}
    </Tag>
}
