import React from 'react'
import { render } from 'react-dom';
import  cities  from './cities';

import { Layout } from './layout';

render(<Layout cities={cities}/>, document.getElementById('root'));
