interface LayoutProps {
  blockPrefix: string,
  children: React.ReactNode;
}

const Layout = ({
  blockPrefix,
  children
}: LayoutProps) => {

  return (
    <div className={`${blockPrefix}-layout`}>
      <div className={`${blockPrefix}-layout__wrapper`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;