// react
import { useState } from "react"

// components
import Nav from "../components/navs/Nav"

// hooks
import { useRefContext } from "../hooks/useRefContext"
import Header from "../components/helpers/Header"
import Hamburger from "../components/navs/Hamburger"

const SportsHeader = ({ data }: { data: any[] }) => {
  const [isExpandedMenu, setIsExpandedMenu] = useState<boolean>(false);
  const { sportsHeaderNavListRef } = useRefContext();

  return (
    <Header
      blockPrefix="sports"
      level={2}
      title="Sports Header"
      visibleTitle={false}
    >
      <Nav
        parent="sports-header"
        data={data}
        type="header"
        level={3}
        title="sports nav"
        visibleTitle={false}
        labelledBy="hamburger--sports-header__hamburger"
        isExpandedMenu={isExpandedMenu}
        refContext={sportsHeaderNavListRef}
      />
      <div className="sports-header__hamburger">
        <Hamburger
          id="hamburger--sports-header__hamburger"
          type="filled"
          status={setIsExpandedMenu}
          ariaControls="nav--sports-header__list"
          ariaLive="assertive"
          ariaHaspopup="menu"
        />
      </div>
    </Header>
  );
};

export default SportsHeader;