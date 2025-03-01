// react
import { forwardRef, useImperativeHandle, useRef } from 'react'

// components
import Article, { ArticleRef } from './helpers/Article';
import Header from './helpers/Header';
import Section from './helpers/Section';
import Heading from './helpers/Heading';
import Footer from './helpers/Footer';

// types
import { Data } from '../types/data';
import LicenseInfo from './links/LicenseInfo';

interface SportDetailsProps {
    blockPrefix: string;
    level: number;
    data: Data;
    topBorder: [number, number];
    parWidth: number;
};

export interface SportDetailsRef {
    articleEl: ArticleRef | null;
    borderEl: HTMLDivElement | null;
    parEl: HTMLParagraphElement | null;
}

const SportDetails = forwardRef<SportDetailsRef, SportDetailsProps>(({
    blockPrefix,
    level,
    data,
    topBorder,
    parWidth
}: SportDetailsProps, ref) => {

    const articleRef = useRef<ArticleRef>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const parRef = useRef<HTMLParagraphElement>(null);
    const sportDetailsRef = useRef<ArticleRef>(null);

    useImperativeHandle(ref, () => ({
        articleEl: sportDetailsRef.current,
        borderEl: borderRef.current,
        parEl: parRef.current
    }));

    const Thumbnail = data?.thumbnail?.src;

    return (
        <Article
            ref={articleRef}
            blockPrefix={blockPrefix}
            headerChildren={
                <Header
                    blockPrefix={blockPrefix}
                    level={level}
                    title={data?.name || 'Default'}
                    visibleTitle={true}
                    parent={`${blockPrefix}-article`}
                >
                    <p ref={parRef}>
                        {Array.isArray(data?.type) ? data.type.join(", ") : 'Unknown type'}
                    </p>
                </Header>
            }
            contentChildren={
                <div
                    ref={borderRef}
                    className={`${blockPrefix}-article__border--${data?.name}`}
                    style={{
                        borderImage: `linear-gradient(to right, black ${topBorder[0]}px, transparent ${(topBorder[0])}px, transparent ${topBorder[1]}px, black ${topBorder[1]}px) 1 1 1 1`,
                    }}
                >
                    <div
                        className={`${blockPrefix}-article__cover`}
                        style={{
                            backgroundImage: `url(${data?.cover?.src})`,
                        }}
                        role="img"
                        aria-label={`Cover for ${data?.name}`}
                    >
                        <LicenseInfo
                            style={{ position: 'absolute', top: 0, right: 0 }}
                            author={data?.cover?.license?.author || ''}
                            authorURL={data?.cover?.license?.authorURL || ''}
                            license={data?.cover?.license?.license || ''}
                            licenseURL={data?.cover?.license?.licenseURL || ''}
                            platform={data?.cover?.license?.platform || ''}
                            platformURL={data?.cover?.license?.platformURL || ''}
                            count={6}
                        />
                    </div>
                    <Section
                        blockPrefix='bio'
                        parent={`${blockPrefix}-article`}
                        headerChildren={
                            <Heading
                                level={level + 1}
                                title="#Bio"
                                visibleTitle={true}
                            />
                        }
                        contentChildren={
                            <>
                                {data?.text && data?.text.length > 0 ? (
                                    data.text.map((par, index) => (
                                        <p key={index}>{par}</p>
                                    ))
                                ) : (
                                    <p>No bio available</p>
                                )}
                            </>
                        }
                    />
                    <Section
                        blockPrefix='athletes'
                        parent={`${blockPrefix}-article`}
                        headerChildren={
                            <Heading
                                level={level + 1}
                                title="#Best athletes"
                                visibleTitle={true}
                            />
                        }
                        contentChildren={
                            <>
                                <div>
                                    <Heading
                                        level={level + 2}
                                        title='Men'
                                        visibleTitle={true}
                                    />
                                    <ul>
                                        {data?.athletes?.men && data?.athletes?.men.length > 0 ? (
                                            data.athletes.men.map((athlete, index) => (
                                                <li key={index} className={`athletes-section__athlete`}>
                                                    <span>{index + 1}</span>
                                                    <span>{athlete.country}</span>
                                                    <span>{athlete.name}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li>No athletes available</li>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <Heading
                                        level={level + 2}
                                        title='Women'
                                        visibleTitle={true}
                                    />
                                    <ul>
                                        {data?.athletes?.women && data?.athletes?.women.length > 0 ? (
                                            data.athletes.women.map((athlete, index) => (
                                                <li key={index} className={`athletes-section__athlete`}>
                                                    <span>{index + 1}</span>
                                                    <span>{athlete.country}</span>
                                                    <span>{athlete.name}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li>No athletes available</li>
                                        )}
                                    </ul>
                                </div>
                            </>
                        }
                    />
                    <Section
                        blockPrefix='events'
                        parent={`${blockPrefix}-article`}
                        headerChildren={
                            <Heading
                                level={level + 1}
                                title="#Events in 2025"
                                visibleTitle={true}
                            />
                        }
                        contentChildren={
                            <ul className='events-section__events'>
                                {data?.events && data?.events?.length > 0 ? (
                                    data.events.map((event, index) => (
                                        <li key={index} className={`events-section__event`}>
                                            <span>{event.date}</span>
                                            <span>{event.name}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li>No events available</li>
                                )}
                            </ul>
                        }
                    />
                    {data?.clubs && (
                        <Section
                            blockPrefix='clubs'
                            parent={`${blockPrefix}-article`}
                            headerChildren={
                                <Heading
                                    level={4}
                                    title="#Clubs"
                                    visibleTitle={true}
                                />
                            }
                            contentChildren={
                                <ul>
                                    {data?.clubs.length > 0 && data?.clubs.map((event, index) => (
                                        <li key={index}>{event}</li>
                                    ))}
                                </ul>
                            }
                        />
                    )}
                </div>
            }
            footerChildren={
                <Footer
                    parent={`${blockPrefix}-article`}
                    blockPrefix={blockPrefix}
                    level={level}
                    title="Footer"
                    visibleTitle={false}
                    footerStyle={{ width: parWidth + 20 }}
                >
                    {Thumbnail && <Thumbnail />}
                </Footer>
            }
        />
    );
});

export default SportDetails;