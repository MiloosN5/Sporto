interface SkippingProps {
  href: string;
  content: string;
};

const Skipping = ({
  href,
  content
}: SkippingProps) => {

  return (
    <a
      className='skipping'
      href={href}
    >
      {content}
    </a>
  );
};

export default Skipping;