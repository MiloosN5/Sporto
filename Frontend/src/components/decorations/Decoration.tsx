interface IconProps {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
};

interface DecorationProps {
  modifier: string
  icons: IconProps;
};

const Decoration = ({
  modifier,
  icons
}: DecorationProps) => {
  
  const allIcons = Object.values(icons);

  return (
    <div className={`decoration--${modifier}`}>
      {Array.from({ length: 2 }).map(() => (
        allIcons.map((Icon, index) => (
          <div
            key={index}
            className={`decoration--${modifier}__item`}
          >
            <Icon />
          </div>
        ))
      ))};
    </div>
  );
};

export default Decoration;