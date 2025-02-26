// components
import MessageForm from '../components/forms/MessageForm'
import Section from '../components/helpers/Section'
import Heading from '../components/helpers/Heading'

// hooks
import { useFocusContext } from '../hooks/useFocusContext'

const MessageContactSection = () => {
  const { messageContactSectionFocus } = useFocusContext();

  return (
    <Section
      blockPrefix='contact'
      modifier='message'
      status={messageContactSectionFocus}
      headerChildren={
        <Heading
          title='Ask us something'
          level={2}
          visibleTitle={true}
        />
      }
      contentChildren={
        <MessageForm />
      }
    />
  );
};

export default MessageContactSection;