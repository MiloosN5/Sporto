interface PageProps {
  blockPrefix: string
  children: any,
}

const Page = ({
  blockPrefix,
  children
}: PageProps) => {

  return (
    <div className={`page ${blockPrefix}-page`}>
      {children}
    </div>
  );
};

export default Page;