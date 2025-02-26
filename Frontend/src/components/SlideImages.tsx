// react
import { useState } from 'react'

// components
import Skipping from './navs/Skipping'
import Heading from './helpers/Heading'
import Article from './helpers/Article'
import Image from './images/Image'

// types
import { Data } from '../types/data'

// icons
import { CircleDot, Circle, ArrowBigLeft, ArrowBigRight } from 'lucide-react'

interface SlideImagesProps {
    parent: string;
    blockPrefix: string;
    modifier?: string;
    page: string;
    level: number;
    data: any[];
    style?: any;
};

const SlideImages = ({
    parent,
    blockPrefix,
    modifier,
    page,
    level,
    data,
    style
}: SlideImagesProps) => {

    const [imageIndex, setImageIndex] = useState<number>(0);

    const showNextImage = () => {
        setImageIndex((index) => (index === data.length - 1 ? 0 : index + 1));
    };

    const showPrevImage = () => {
        setImageIndex((index) => (index === 0 ? data.length - 1 : index - 1));
    };

    return (
        <Article
            parent={parent}
            blockPrefix={blockPrefix}
            modifier={modifier}
            articleStyle={style}
            headerChildren={
                <Heading
                    level={level}
                    title="Slider Images"
                    visibleTitle={false}
                />
            }
            contentChildren={
                <>
                    <Skipping
                        href={`#after-${page}-${parent}-${blockPrefix}`}
                        content="Skip Image Slider Controls"
                    />
                    <div
                        className={`${blockPrefix}-article__images`}
                        style={{ transform: `translateX(-${100 * imageIndex}%)` }}
                    >
                        {data.map(({ cover, }: Data, index: number) => (
                            <Image
                                key={index}
                                parent={`${blockPrefix}-article`}
                                src={typeof cover?.src === 'string' ? cover?.src : ''}
                                alt={cover?.alt}
                                ariaHidden={imageIndex !== index}
                                license={true}
                                licenseInfo={cover?.license}
                                licenseStyle={{ position: 'absolute', top: 0, right: 0 }}
                                count={1}
                            />
                        ))}
                    </div>
                    <button
                        onClick={showPrevImage}
                        className={`${blockPrefix}-article__controls--left`}
                        aria-label="View Previous Image"
                    >
                        <ArrowBigLeft aria-hidden={true} />
                    </button>
                    <button
                        onClick={showNextImage}
                        className={`${blockPrefix}-article__controls--right`}
                        aria-label="View Next Image"
                    >
                        <ArrowBigRight aria-hidden={true} />
                    </button>
                    <div className={`${blockPrefix}-article__indicators`}>
                        {data.map((_, index: number) => (
                            <button
                                onClick={() => setImageIndex(index)}
                                className={`${blockPrefix}-article__indicator`}
                                key={index}
                                tabIndex={0}
                                aria-label={`View Image ${index + 1}`}
                            >
                                {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                            </button>
                        ))}
                    </div>
                    <div id={`after-${page}-${parent}-${blockPrefix}`} />
                </>
            }
        />
    );
};

export default SlideImages;