import React from 'react'
import { render } from 'react-dom';
import  cities  from './cities';

import App  from './app';
import store from "./store";
import {Provider} from 'react-redux'

render(<Provider store={store}>
    <App cities={cities}/>
</Provider>, document.getElementById('root'));
