import { NavLink } from 'react-router-dom'

interface AnchorProps {
  parent?: string;
  title: string,
  URL: string,
  type: string
}

const Anchor = ({
  parent,
  title,
  URL,
  type
}: AnchorProps) => {
  
  return (
    <NavLink
      className={`anchor--${type} ${parent ? `${parent}__anchor` : ``}`}
      to={URL}
    >
      <span>{title}</span>
    </NavLink>
  );
};

export default Anchor;