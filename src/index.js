import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import Store from './store/index';

ReactDOM.render(
    
<Provider store={Store}>
    <Main />
</Provider>
, document.getElementById('root'));



