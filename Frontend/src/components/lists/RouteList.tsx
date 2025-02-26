// react
import { forwardRef, useEffect } from "react";

// plugins
import { NavLink } from "react-router-dom";

// icons 
import { ChevronDown } from "lucide-react";

// components
import Skipping from "../navs/Skipping";

interface ListItemData {
    indexUnique: string;
    name: string;
    URL?: string;
    image?: React.ComponentType;
    children?: ListItemData[];
}

interface RouteListProps {
    parent?: string;
    id: string;
    listItems: ListItemData[];
    status?: string;
    direction?: string;
    labelledBy?: string;
    isHidden?: boolean;
    hiddenListItemNames?: boolean;
    sharedRef?: React.RefObject<HTMLUListElement>,
}

const RouteList = forwardRef<HTMLUListElement, RouteListProps>(({
    parent,
    listItems,
    id,
    status,
    direction,
    labelledBy,
    isHidden,
    hiddenListItemNames,
    sharedRef,
}, ref) => {

    // get Height of ListItem
    useEffect(() => {

        const updateHeight = () => {
            document.querySelectorAll('.list--route > li').forEach((li) => {
                if (li instanceof HTMLLIElement) {
                    const height = li.offsetHeight;
                    li.style.setProperty('--item-height', `${height}px`);
                }
            });
        };

        const handleUpdate = () => {
            updateHeight();
        };

        handleUpdate();
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <ul
            ref={ref}
            className={`${parent ? `${parent}__list` : undefined}  list--${direction} list--route  ${status}`}
            aria-labelledby={labelledBy ? labelledBy : undefined}
            id={id}
            hidden={isHidden}
        >
            {listItems.map((route) => {
                return (
                    <li
                        key={route.indexUnique}
                        onMouseEnter={() => route.children && route.children.length > 0 && sharedRef?.current?.classList.toggle('subListOpened')}
                        onMouseLeave={() => route.children && route.children.length > 0 && sharedRef?.current?.classList.toggle('subListOpened')}
                    >
                        {route.children && route.children.length > 0 ? (
                            <>
                                <Skipping
                                    href={`#after-routelist-${route.indexUnique}`}
                                    content="Skip sublist"
                                />
                                <a>
                                    {route.image && (<route.image />)} <span className={`${hiddenListItemNames ? 'sr-only' : ''}`}>{route.name}</span> <ChevronDown />
                                </a>
                                <ul className={`list--route  list--sublist`}>
                                    {route.children.map((childRoute) => (
                                        <li key={childRoute.indexUnique}>
                                            {childRoute.URL ? (
                                                <NavLink to={childRoute.URL}>
                                                    {childRoute.image && (<childRoute.image />)} <span className={`${hiddenListItemNames ? 'sr-only' : ''}`}>{childRoute.name}</span>
                                                </NavLink>
                                            ) : (
                                                <>
                                                    {childRoute.image && (<childRoute.image />)} <span className={`${hiddenListItemNames ? 'sr-only' : ''}`}>{childRoute.name}</span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <div id={`after-routelist-${route.indexUnique}`} />
                            </>
                        ) : (
                            route.URL ? (
                                <NavLink to={route.URL}>
                                    {route.image && (<route.image />)} <span className={`${hiddenListItemNames ? 'sr-only' : ''}`}>{route.name}</span>
                                </NavLink>
                            ) : (
                                <>
                                    {route.image && (<route.image />)}
                                    <span className={`${hiddenListItemNames ? 'sr-only' : ''}`}>{route.name}</span>
                                </>
                            )
                        )}
                    </li>
                );
            })}
        </ul>
    );
});

export default RouteList;
