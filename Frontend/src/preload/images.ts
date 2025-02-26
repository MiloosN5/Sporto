import BasketballThumbnail from '../assets/images/thumbnails/BasketballThumbnail.svg'
import FootballThumbnail from '../assets/images/thumbnails/FootballThumbnail.svg'
import VolleyballThumbnail from '../assets/images/thumbnails/VolleyballThumbnail.svg'
import BoxingThumbnail from '../assets/images/thumbnails/BoxingThumbnail.svg'
import BadmintonThumbnail from '../assets/images/thumbnails/BadmintonThumbnail.svg'
import TennisThumbnail from '../assets/images/thumbnails/TennisThumbnail.svg'

import BasketballCover from '../assets/images/covers/BasketballCover.png'
import BadmintonCover from '../assets/images/covers/BadmintonCover.png'
import VolleyballCover from '../assets/images/covers/VolleyballCover.png'
import FootballCover from '../assets/images/covers/FootballCover.png'
import BoxingCover from '../assets/images/covers/BoxingCover.png'
import TennisCover from '../assets/images/covers/TennisCover.png'

const preloadImages = () => {
    const images: any[] = [
      BasketballThumbnail,
      FootballThumbnail,
      VolleyballThumbnail,
      BoxingThumbnail,
      BadmintonThumbnail,
      TennisThumbnail,
      BasketballCover,
      FootballCover,
      VolleyballCover,
      BoxingCover,
      BadmintonCover,
      TennisCover
    ];
  
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
 export default preloadImages;