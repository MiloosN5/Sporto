// components
import Nav from '../components/navs/Nav';
import RouteList from '../components/lists/RouteList';
import Footer from '../components/helpers/Footer';
import Section from '../components/helpers/Section';
import Heading from '../components/helpers/Heading';

// data
import { exploreRoutes, legalRoutes, socialRoutes } from '../datas/routes';

// images
import LogoIcon from '../components/images/LogoIcon';

const PageFooter = () => {

  return (
    <Footer
      blockPrefix="root"
      level={2}
      title="Page Footer"
      visibleTitle={false}
    >
      <div className="root-footer__top">
        <div className="root-footer__logo logo">
          <LogoIcon />
        </div>
        <Nav
          parent="root-footer"
          modifer="explore"
          data={exploreRoutes}
          type="footer"
          level={3}
          title="Main Menu"
          visibleTitle={true}
          direction='vertical'
        />
        <Nav
          parent="root-footer"
          modifer="legal"
          data={legalRoutes}
          type="footer"
          level={3}
          title="Terms & Legal"
          visibleTitle={true}
          direction='vertical'
        />
        <Section
          parent="root-footer"
          blockPrefix="socials"
          headerChildren={
            <Heading
              level={3}
              title="Follow Us"
              visibleTitle={true}
            />
          }
          contentChildren={
            <RouteList
              parent='nav--socials'
              listItems={socialRoutes}
              id='page-footer__list--socials'
              status='openedMenu'
              direction='horizontal'
              isHidden={false}
              hiddenListItemNames={true}
            />
          }
        />
      </div>
      <div className="root-footer__bottom">
        <p>Copyright © 2025, Sporto. All Rights Reserved</p>
      </div>
    </Footer>
  );
};

export default PageFooter;