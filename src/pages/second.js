import React, { Component } from 'react';
import HighLightList from '../components/highlight-list';

import './styles.css'

const dataList = [
    {
        value: 'Torsk',
        id: 1     
    },
    {
        value: 'Katt',
        id: 2     
    },
]

const Second = () => (
    <div className="page-layout">
        <HighLightList inputList={dataList} />
    </div>
);

export default Second