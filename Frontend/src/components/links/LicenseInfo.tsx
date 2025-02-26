import { NavLink } from 'react-router-dom';

interface LicenseInfoProps {
  parent?: string;
  style?: any;
  author: string;
  authorURL: string;
  license: string;
  licenseURL: string;
  platform: string;
  platformURL: string;
  count: number;
};

const LicenseInfo = ({
  parent,
  author,
  style,
  authorURL,
  license,
  licenseURL,
  platform,
  platformURL,
  count
}: LicenseInfoProps) => {

  return (
    <p className={`licenseInfo ${parent ? `${parent}__licenseInfo` : ``}`} style={style ? style : undefined}>
      <span>{`Resource${count > 1 ? `s` : ``}`} by <NavLink to={authorURL}>{author}</NavLink>,</span>
      <span>licensed under <NavLink to={licenseURL}>{license}</NavLink>,</span>
      <span>from <NavLink to={platformURL}>{platform}</NavLink></span>
    </p>
  );
};

export default LicenseInfo;