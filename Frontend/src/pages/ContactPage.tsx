import MessageContactSection from '../sections/MessageContactSection'
import SubscribeContactSection from '../sections/SubscribeContactSection'
import Page from '../components/helpers/Page'

const ContactPage = () => {

  return (
    <Page blockPrefix="contact">
      <SubscribeContactSection />
      <MessageContactSection />
    </Page>
  )
}

export default ContactPage