import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import './styles/index.scss';

const app = document.querySelector('#root')
render(<Main />, app);