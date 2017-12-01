import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import paper  from  '../Component/paper/paper.js'
import { Button, Welcome } from '@storybook/react/demo';
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import {muiTheme} from 'storybook-addon-material-ui';

// Import some examples from material-ui
import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

storiesOf('Material-UI', module)
// Add the `muiTheme` decorator to provide material-ui support to your stories.
// If you do not specify any arguments it starts with two default themes
// You can also configure `muiTheme` as a global decorator.
    .addDecorator(muiTheme())
    .add('number ', () => (
            <list number />
        ))
    .add('Raised Button Example Simple', () => (
            <RaisedButtonExampleSimple />
        ))
    .add('Date Picker Example Simple', () => (
            <DatePickerExampleSimple />
        ));





storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
.add('with date',() => <button onclick={action('clicked')}>10/11/2017</button>);

storiesOf('Paper',module)
.add('with an image'() => <Paper
