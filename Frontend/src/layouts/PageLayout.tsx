// plugins
import { Outlet, useLoaderData } from 'react-router-dom'

// components
import ScrollToTop from '../components/navs/ScrollToTop'
import Layout from '../components/helpers/Layout'
import PageFooter from '../footers/PageFooter'
import RootHeader from '../headers/RootHeader'
import Decoration from '../components/decorations/Decoration'

// providers
import { RefProvider } from '../providers/RefProvider'
import { FocusProvider } from '../providers/FocusProvider'
import { AuthProvider } from '../providers/AuthProvider'
import { SizeProvider } from '../providers/SizeProvider'

// types
import { Route } from '../types/route'

// images
import { BasketballThumbnail, FootballThumbnail, VolleyballThumbnail, BoxingThumbnail, BadmintonThumbnail, TennisThumbnail } from '../datas/images';

const PageLayout = () => {

  const { pageRoutes } = useLoaderData() as { pageRoutes: Route[] }
  const formattedPageRoutes = pageRoutes.map((route) => {
    return {
      ...route,
      name: route.name.charAt(0).toUpperCase() + route.name.slice(1),
      children: route.children && route.children.map((child) => {
        return { ...child, name: child.name.charAt(0).toUpperCase() + child.name.slice(1) }
      })
    };
  });

  return (
    <Layout blockPrefix='page'>
      <SizeProvider>
        <AuthProvider>
          <RefProvider>
            <FocusProvider>
              <RootHeader data={formattedPageRoutes} />
              <main>
                <Outlet />
                <ScrollToTop />
              </main>
              <PageFooter />
              <Decoration
                modifier="root"
                icons={{
                  basketball: BasketballThumbnail,
                  footbal: FootballThumbnail,
                  volleyball: VolleyballThumbnail,
                  badminton: BadmintonThumbnail,
                  boxing: BoxingThumbnail,
                  tennis: TennisThumbnail
                }}
              />
            </FocusProvider>
          </RefProvider>
        </AuthProvider>
      </SizeProvider>
    </Layout>
  );
};

export default PageLayout;