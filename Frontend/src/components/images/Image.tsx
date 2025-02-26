import LicenseInfo from '../links/LicenseInfo';

interface ImageProps {
  parent?: string;
  id?: number,
  src?: string,
  alt?: string,
  ariaHidden?: boolean,
  style?: any;
  license?: boolean;
  licenseInfo?: any;
  licenseStyle?: any;
  count?: number;
};

const Image = ({
  parent,
  id,
  src,
  alt,
  ariaHidden,
  style,
  license = false,
  licenseInfo,
  licenseStyle,
  count = 1
}: ImageProps) => {

  return (
    <div className={`image ${parent ? `${parent}__image` : ``}`}>
      <img
        key={id}
        src={src}
        alt={alt}
        aria-hidden={ariaHidden}
        style={style}
      />
      {license && (
        <LicenseInfo
          style={licenseStyle}
          author={licenseInfo.author}
          authorURL={licenseInfo.authorURL}
          license={licenseInfo.license}
          licenseURL={licenseInfo.licenseURL}
          platform={licenseInfo.platform}
          platformURL={licenseInfo.platformURL}
          count={count}
        />
      )}
    </div>
  );
};

export default Image;
