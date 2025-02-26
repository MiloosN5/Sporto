// react
import { forwardRef } from "react"

// components
import Heading from "./Heading"

interface FooterProps {
    parent?: string;
    blockPrefix: string;
    level: number;
    title: string;
    visibleTitle?: boolean;
    footerStyle?: any;
    wrapperStyle?: any;
    contentStyle?: any;
    children?: React.ReactNode;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({
    parent,
    blockPrefix,
    level,
    title,
    visibleTitle = true,
    footerStyle,
    wrapperStyle,
    contentStyle,
    children = null
}, ref) => {

    return (
        <footer
            ref={ref}
            className={`footer ${parent ? `${blockPrefix}-footer ${parent}__footer` : `${blockPrefix}-footer`}`}
            style={footerStyle ? footerStyle : undefined}
        >
            <div
                className={`footer__wrapper ${blockPrefix}-footer__wrapper`}
                style={wrapperStyle ? wrapperStyle : undefined}
            >
                <Heading
                    level={level}
                    title={title}
                    visibleTitle={visibleTitle}
                />
                {children && (
                    <div
                        className={`footer__content ${blockPrefix}-footer__content`}
                        style={contentStyle ? contentStyle : undefined}
                    >
                        {children}
                    </div>
                )}
            </div>
        </footer>
    );
});

export default Footer;