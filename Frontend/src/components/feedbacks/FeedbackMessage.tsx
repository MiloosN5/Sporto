import { PlusCircleIcon, XCircleIcon } from 'lucide-react';

export interface FeedbackMessageProps {
  message: {
    content: string,
    type: 'invalid' | 'success' | 'fail'
  };
};

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ message: { content, type } }) => {
  
  return (
    <div className={`feedback--${type}`}>
      {type === 'invalid' && (
        <>
          {content}
        </>
      )}
      {type === 'fail' && (
        <>
          <XCircleIcon /> {content}
        </>
      )}
      {type === 'success' && (
        <>
          <PlusCircleIcon /> {content}
        </>
      )}
    </div>
  );
};

export default FeedbackMessage;
