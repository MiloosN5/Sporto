/// <reference types="vite-plugin-svgr/client" />
import BasketballThumbnail from '../assets/images/thumbnails/BasketballThumbnail.svg?react'
import FootballThumbnail from '../assets/images/thumbnails/FootballThumbnail.svg?react'
import VolleyballThumbnail from '../assets/images/thumbnails/VolleyballThumbnail.svg?react'
import BoxingThumbnail from '../assets/images/thumbnails/BoxingThumbnail.svg?react'
import BadmintonThumbnail from '../assets/images/thumbnails/BadmintonThumbnail.svg?react'
import TennisThumbnail from '../assets/images/thumbnails/TennisThumbnail.svg?react'
export { BasketballThumbnail, FootballThumbnail, VolleyballThumbnail, BoxingThumbnail, BadmintonThumbnail, TennisThumbnail }

// images
import BasketballCover from '../assets/images/covers/BasketballCover.png'
import BadmintonCover from '../assets/images/covers/BadmintonCover.png'
import VolleyballCover from '../assets/images/covers/VolleyballCover.png'
import FootballCover from '../assets/images/covers/FootballCover.png'
import BoxingCover from '../assets/images/covers/BoxingCover.png'
import TennisCover from '../assets/images/covers/TennisCover.png'

// types
import { ResourcesByCategory } from '../types/image'

export const heroImages: ResourcesByCategory[] = [
    {
        label: 'image_1',
        cover: {
            src: 'https://images.unsplash.com/photo-1606244864456-8bee63fce472?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'alt1',
            license: {
                author: 'Brecht Deboosere',
                authorURL: 'https://unsplash.com/es/fotos/hombre-con-camisa-naranja-y-pantalones-cortos-negros-jugando-baloncesto-9NPWmYOHtoU',
                license: 'Unsplash License',
                licenseURL: 'https://unsplash.com/es/licencia',
                platform: 'Unsplash',
                platformURL: 'https://unsplash.com/'
            }
        }
    },
    {
        label: 'image_2',
        cover: {
            src: 'https://images.unsplash.com/photo-1601224748193-d24f166b5c77?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'alt2',
            license: {
                author: 'Sean Benesh',
                authorURL: 'https://unsplash.com/photos/man-in-black-shorts-climbing-brown-rock-formation-during-daytime-VnmbcgAfL3Q',
                license: 'Unsplash License',
                licenseURL: 'https://unsplash.com/license',
                platform: 'Unsplash',
                platformURL: 'https://unsplash.com/'
            }
        }
    },
    {
        label: 'image_3',
        cover: {
            src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'alt3',
            license: {
                author: 'Connor Coyne',
                authorURL: 'https://unsplash.com/photos/white-and-blue-soccer-ball-on-green-grass-field-OgqWLzWRSaI',
                license: 'Unsplash License',
                licenseURL: 'https://unsplash.com/license',
                platform: 'Unsplash',
                platformURL: 'https://unsplash.com/'
            }
        }
    },
    {
        label: 'image_4',
        cover: {
            src: 'https://images.unsplash.com/photo-1508972348941-5e2b14d04c64?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'alt4',
            license: {
                author: 'Paul Waliez',
                authorURL: 'https://unsplash.com/photos/group-of-men-playing-basketball-on-alleyway-LuQE3lqbVqo',
                license: 'Unsplash License',
                licenseURL: 'https://unsplash.com/license',
                platform: 'Unsplash',
                platformURL: 'https://unsplash.com/'              
            }
        }
    }
];

export const sportsImages: ResourcesByCategory[] = [
    {
        label: 'basketball',
        thumbnail: {
            src: BasketballThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: BasketballCover,
            alt: 'cover image for basketball',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
    {
        label: 'football',
        thumbnail: {
            src: FootballThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: FootballCover,
            alt: 'cover image for football',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
    {
        label: 'volleyball',
        thumbnail: {
            src: VolleyballThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: VolleyballCover,
            alt: 'cover image for volleyball',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
    {
        label: 'badminton',
        thumbnail: {
            src: BadmintonThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: BadmintonCover,
            alt: 'cover image for badminton',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
    {
        label: 'tennis',
        thumbnail: {
            src: TennisThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: TennisCover,
            alt: 'cover image for tennis',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
    {
        label: 'boxing',
        thumbnail: {
            src: BoxingThumbnail,
            alt: '',
            license: {
                author: 'jankquin',
                authorURL: 'https://iconscout.com/free-icon-pack/sports-284',
                license: 'Digital License',
                licenseURL: 'https://iconscout.com/licenses#iconscout',
                platform: 'IconScout',
                platformURL: 'https://iconscout.com/'
            }
        },
        cover: {
            src: BoxingCover,
            alt: 'cover image for boxing',
            license: {
                author: 'AI',
                authorURL: 'https://www.piclumen.com/',
                license: 'PicLumenAI License',
                licenseURL: 'https://www.piclumen.com/terms-of-use/',
                platform: 'PicLumenAI',
                platformURL: 'https://www.piclumen.com/'
            }
        }
    },
];