import React from "react";

interface HeadingProps {
    level: number;
    title?: any;
    visibleTitle: boolean;
};

const Heading = ({
    level,
    title = "default",
    visibleTitle
}: HeadingProps) => {
    
    const Tag = `h${level}`;

    return <>{React.createElement(Tag, { className: visibleTitle ? '' : 'sr-only' }, title)}</>;
};

export default Heading;