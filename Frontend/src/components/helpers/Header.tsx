// react
import { forwardRef } from "react"

// components
import Heading from "./Heading"

interface HeaderProps {
    parent?: string;
    blockPrefix: string;
    level: number;
    title: string;
    visibleTitle?: boolean;
    headerStyle?: any;
    wrapperStyle?: any;
    contentStyle?: any;
    children?: React.ReactNode;
};

const Header = forwardRef<HTMLElement, HeaderProps>(({
    parent,
    blockPrefix,
    level,
    title,
    headerStyle,
    wrapperStyle,
    contentStyle,
    visibleTitle = true,
    children = null
}, ref) => {

    return (
        <header
            ref={ref}
            className={`header ${parent ? `${blockPrefix}-header ${parent}__header` : `${blockPrefix}-header`}`}
            style={headerStyle ? headerStyle : undefined}
        >
            <div
                className={`header__wrapper ${blockPrefix}-header__wrapper`}
                style={wrapperStyle ? wrapperStyle : undefined}
            >
                <Heading
                    level={level}
                    title={title}
                    visibleTitle={visibleTitle}
                />
                {children && (
                    <div
                        className={`header__content ${blockPrefix}-header__content`}
                        style={contentStyle ? contentStyle : undefined}
                    >
                        {children}
                    </div>
                )}
            </div>
        </header>
    );
});

export default Header;