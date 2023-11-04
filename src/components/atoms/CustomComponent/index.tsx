import { FC } from 'react';

type CustomComponentProps = {
  status?: 'error' | 'success' | 'loading';
};

export const CustomComponent: FC<CustomComponentProps> = ({ status }) => {
  switch (status) {
    case 'error':
      return <div>Error</div>;
    case 'success':
      return <div>Success</div>;
    case 'loading':
      return <div>Loading...</div>;
    default:
      return <div>Default</div>;
  }
};
