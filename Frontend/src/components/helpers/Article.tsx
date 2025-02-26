import { forwardRef, useImperativeHandle, useRef } from "react"

interface ArticleProps {
    parent?: string;
    blockPrefix: string;
    modifier?: string;
    articleStyle?: any;
    wrapperStyle?: any;
    contentStyle?: any;
    headerChildren?: React.ReactNode;
    contentChildren?: React.ReactNode;
    footerChildren?: React.ReactNode;
};

export interface ArticleRef {
    articleRef: HTMLElement | null;
};

const Article = forwardRef<ArticleRef, ArticleProps>(({
    parent,
    blockPrefix,
    modifier,
    articleStyle,
    wrapperStyle,
    contentStyle,
    headerChildren,
    contentChildren,
    footerChildren
}, ref) => {

    const articleRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
        articleRef: articleRef.current,
    }));

    return (
        <article
            ref={articleRef}
            className={`article ${modifier ? `${blockPrefix}-article--${modifier} ${parent ? `${parent}__${blockPrefix}--${modifier}` : ''}` : `${blockPrefix}-article ${parent ? `${parent}__${blockPrefix}` : ''}`}`}
            style={articleStyle ? articleStyle : undefined}
        >
            <div
                className={`article__wrapper ${modifier ? `${blockPrefix}-article--${modifier}__wrapper` : `${blockPrefix}-article__wrapper`}`}
                style={wrapperStyle ? wrapperStyle : undefined}

            >
                {headerChildren && (
                    headerChildren
                )}
                {contentChildren && (
                    <div
                        className={`article__content ${modifier ? `${blockPrefix}-article--${modifier}__content` : `${blockPrefix}-article__content`}`}
                        style={contentStyle ? contentStyle : undefined}
                    >
                        {contentChildren}
                    </div>
                )}
                {footerChildren && (
                    footerChildren
                )}
            </div>
        </article>
    );
});

export default Article;