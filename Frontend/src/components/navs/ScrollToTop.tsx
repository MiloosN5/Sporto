import { ArrowUpCircle } from "lucide-react"

const ScrollToTop = () => {

  return (
    <div className='scrollToTop-utility'>
      <div className="scrollToTop-utility__wrapper">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUpCircle
            size={50}
            strokeWidth={1}
          />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;