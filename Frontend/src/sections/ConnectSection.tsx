// react
import { forwardRef, useImperativeHandle, useRef } from 'react'

// components
import Section, { SectionRef } from '../components/helpers/Section';
import Heading from '../components/helpers/Heading';
import Anchor from '../components/links/Anchor';

const ConnectSection = forwardRef<SectionRef>((_, ref) => {
    const connectRef = useRef<SectionRef>({ sectionRef: null });
    useImperativeHandle(ref, () => connectRef.current);

    return (
        <Section
            ref={connectRef}
            blockPrefix="connect"
            headerChildren={
                <Heading
                    level={2}
                    title="Get in touch with us"
                    visibleTitle={true}
                />
            }
            contentChildren={
                <Anchor
                    title="VIEW MORE"
                    URL="/contact"
                    type="filled"
                />
            }
        />
    );
});

export default ConnectSection;