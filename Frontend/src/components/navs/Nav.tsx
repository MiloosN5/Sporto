import RouteList from '../lists/RouteList';
import Heading from '../helpers/Heading';

export interface NavProps {
    parent: string;
    modifer?: string;
    data: any[];
    type: string;
    level: number;
    title: string;
    visibleTitle: boolean;
    labelledBy?: string;
    direction?: string;
    isExpandedMenu?: boolean;
    refContext?: React.RefObject<HTMLUListElement>;
};
export type Ref = HTMLUListElement;

const Nav = ({
    parent,
    modifer,
    data,
    type,
    level,
    title,
    visibleTitle,
    labelledBy,
    direction = 'fluid',
    isExpandedMenu = true,
    refContext
}: NavProps) => {

    return (
        <nav className={`nav--${type} ${modifer ? `${parent}__nav--${modifer}` : `${parent}__nav`}`}>
            <Heading
                level={level}
                title={title}
                visibleTitle={visibleTitle}
            />
            <RouteList
                parent={`nav--${type}`}
                listItems={data}
                id={`${modifer ? `${parent}__list--${modifer}` : `${parent}__list`}`}
                status={`${isExpandedMenu ? "openedMenu" : "closedMenu"}`}
                direction={direction}
                labelledBy={`${labelledBy ? `${labelledBy}` : ''}`}
                isHidden={!(isExpandedMenu)}
                sharedRef={refContext}
                ref={refContext}
            />
        </nav>
    );
};

export default Nav;