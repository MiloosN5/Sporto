// components
import Section from '../components/helpers/Section'
import Heading from '../components/helpers/Heading'
import SubscribeForm from '../components/forms/SubscribeForm'

// hooks
import { useFocusContext } from '../hooks/useFocusContext'

const SubscribeContactSection = () => {
  const { subscribeContactSectionFocus } = useFocusContext();

  return (
    <Section
      blockPrefix='contact'
      modifier='subscribe'
      status={subscribeContactSectionFocus}
      headerChildren={
        <Heading
          title='Subscribe to our newsletters'
          level={2}
          visibleTitle={true}
        />
      }
      contentChildren={
        <SubscribeForm />
      }
    />
  );
};

export default SubscribeContactSection;