import React from 'react';

import Home from '../components/Home';
import UseCallback from '../components/UseCallback';
import UseEffect from '../components/UseEffect';
import UseState from '../components/UseState';
import UseMemo from '../components/UseMemo';
import UseRef from '../components/UseRef';
import UseContext from '../components/UseContext';

const Routes = {
    '/': () => <Home />,
    '/usestate': () => <UseState />,
    '/useeffect': () => <UseEffect />,
    '/usememo': () => <UseMemo />,
    '/usecallback': () => <UseCallback />,
    '/useref': () => <UseRef />,
    '/usecontext': () => <UseContext />,
}

export default Routes;