// react
import { useEffect, useState } from "react";

// Components
import Header from "../components/helpers/Header";
import Nav from "../components/navs/Nav";
import Hamburger from "../components/navs/Hamburger";
import Anchor from "../components/links/Anchor";

// images
import LogoIcon from "../components/images/LogoIcon";

// types
import { Route } from "../types/route";

// hooks
import { useRefContext } from "../hooks/useRefContext";
import { useAuthContext } from "../hooks/useAuthContext";

const RootHeader = ({ data }: { data: Route[] }) => {
    const [isExpandedMenu, setIsExpandedMenu] = useState<boolean>(false);
    const { user, logout } = useAuthContext();
    const { rootHeaderNavListRef } = useRefContext();
    const [expandedData, setExpandedData] = useState<Route[]>(data);

    useEffect(() => {
        if (user) {
            setExpandedData((prev) => ([...prev, {
                indexUnique: 'route-root-dashboard',
                name: 'Dashboard',
                URL: '/dashboard',
            }]))
        } else {
            setExpandedData((prev) => prev.filter(route => route.name !== 'Dashboard'));
        }
    }, [user])

    return (
        <Header
            level={2}
            blockPrefix="root"
            title="Root Header"
            visibleTitle={true}
        >
            <div className="root-header__logo logo">
                <LogoIcon />
            </div>
            <Nav
                parent="root-header"
                data={expandedData}
                type="header"
                level={3}
                title="root nav"
                visibleTitle={false}
                labelledBy="hamburger--root-header__hamburger"
                direction="fluid"
                isExpandedMenu={isExpandedMenu}
                refContext={rootHeaderNavListRef}
            />
            <div className="root-header__hamburger">
                <Hamburger
                    id="hamburger--root-header__hamburger"
                    type="filled"
                    status={setIsExpandedMenu}
                    ariaControls="nav--root-header__list"
                    ariaLive="assertive"
                    ariaHaspopup="true"
                />
            </div>
            <div className="root-header__CTA">
                {user ? (
                    <button
                        className="button--filled"
                        onClick={logout}
                    >
                        LOGOUT
                    </button>
                ) : (
                    <>
                        <Anchor
                            type="filled"
                            URL='/signup'
                            title="SIGNUP"
                        />
                        <Anchor
                            type="filled"
                            URL='/login'
                            title="LOGIN"
                        />
                    </>
                )}
            </div>
        </Header>
    );
};

export default RootHeader;