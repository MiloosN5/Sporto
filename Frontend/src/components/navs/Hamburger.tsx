// react
import { useEffect, useState } from "react"

// icons
import { Menu } from "lucide-react"

interface HamburgerProps {
  id: string,
  type: 'outline' | 'filled',
  status?: any
  ariaLabel?: string,
  ariaControls?: string,
  ariaLive?: 'off' | 'polite' | 'assertive',
  ariaHaspopup?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
}

const Hamburger = ({
  id,
  type,
  status,
  ariaLabel,
  ariaControls = 'off',
  ariaLive,
  ariaHaspopup
}: HamburgerProps) => {

  const [isExpandedMenu, setIsExpandedMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsExpandedMenu((prev) => !prev);
  };

  useEffect(() => {
    if (status) {
      status(isExpandedMenu);
    }
  }, [isExpandedMenu, status]);

  return (
    <button
      id={id}
      className={type === 'outline' ? 'button--outline' : 'button--filled'}
      onClick={toggleMenu}
      aria-expanded={isExpandedMenu}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-live={ariaLive}
      aria-haspopup={ariaHaspopup}
    >
      <Menu
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      />
    </button>
  );
};

export default Hamburger;
