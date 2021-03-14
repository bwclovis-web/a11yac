import React from 'react';
import {PageProvider} from './src/components/PageProvider/PageProvder';

export const wrapPageElement = ({element}) => (
    <PageProvider>
        {element}
    </PageProvider>
)