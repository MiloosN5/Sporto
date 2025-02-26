// react
import { useEffect, useRef, useState } from 'react'

// plugins
import { useParams, useRouteLoaderData } from 'react-router-dom'

// components
import SportDetails, { SportDetailsRef } from '../components/SportDetails'
import Page from '../components/helpers/Page'

// types
import { Data } from '../types/data'

const SportPage = () => {

    const { id } = useParams();
    const { sportsData } = useRouteLoaderData('sportsLayout') as { sportsData: Data[] };
    const currentSport = sportsData?.find(((sport) => sport.name === id));
    const sportDetailsRef = useRef<SportDetailsRef>(null);

    const [dimensions, setDimensions] = useState({
        borderWidth: 0,
        parWidth: 0,
    });

    //  Get the width for 'border' & 'footer' (based on the paragraph's width)
    useEffect(() => {
        const updateDimensions = () => {
            if (sportDetailsRef.current?.borderEl && sportDetailsRef.current.parEl) {
                const borderWidth = sportDetailsRef.current.borderEl.offsetWidth;
                const parWidth = sportDetailsRef.current.parEl.offsetWidth;

                setDimensions({
                    borderWidth,
                    parWidth,
                });
            };
        };

        const observer = new ResizeObserver(() => updateDimensions());
        if (sportDetailsRef.current?.borderEl) observer.observe(sportDetailsRef.current.borderEl);
        if (sportDetailsRef.current?.parEl) observer.observe(sportDetailsRef.current.parEl);

        return () => observer.disconnect();
    }, []);

    const { borderWidth, parWidth } = dimensions;
    const gap = 10;
    const borderLeftWidth = (borderWidth - parWidth) / 2 - gap;
    const borderRightWidth = borderWidth - borderLeftWidth

    return (
        <Page blockPrefix='sport'>
            <SportDetails
                ref={sportDetailsRef}
                blockPrefix='sportDetails'
                level={2}
                data={currentSport ? currentSport : {}}
                topBorder={[borderLeftWidth, borderRightWidth]}
                parWidth={parWidth}
            />
        </Page>
    );
};

export default SportPage;