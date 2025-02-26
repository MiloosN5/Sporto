// images
import { sportsImages } from './images';

// types
import { Data } from '../types/data'
import axios from 'axios';

export const fetchSportsData = async (): Promise<Data[]> => {
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const response = await axios.get<Data[]>(endpoint);

    return response.data.map((item) => {
        const localImage = sportsImages.find((img) => img.label === item.name);

        return {
            indexUnique: `data-sports-${item.name}`,
            name: item.name,
            URL: `${item.name}`,
            type: item.type,
            text: item.text,
            athletes: item.athletes,
            events: item.events,
            clubs: item.clubs,
            thumbnail: {
                src: localImage?.thumbnail?.src || '',
                alt: localImage?.thumbnail?.alt || '',
                license: localImage?.thumbnail?.license || {}
            },
            cover: {
                src: localImage?.cover?.src || '',
                alt: localImage?.cover?.alt || '',
                license: localImage?.cover?.license || {}
            }
        };
    });
};

fetchSportsData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

