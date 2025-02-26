// images
import { heroImages } from './images';

// types
import { Data } from '../types/data';

export const heroData: Data[] = Array.from( { length: heroImages.length }).map((_, index) => {
    
    return {
        indexUnique: `data-hero-${heroImages[index].label}`,
        name: heroImages[index].label,
        cover: {
            src: heroImages[index].cover?.src || '',
            alt: heroImages[index].cover?.alt || '',
            license: heroImages[index].cover?.license
        }
    };
});






