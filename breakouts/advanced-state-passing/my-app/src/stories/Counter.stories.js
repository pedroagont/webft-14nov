import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Counter from '../components/Counter';

storiesOf('Counter', module).add('Clickable', () => (
  <Counter
    count={1}
    handleDecrement={action('handleDecrement')}
    handleIncrement={action('handleIncrement')}
  />
));
