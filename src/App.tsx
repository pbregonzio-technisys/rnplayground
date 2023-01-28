import * as React from 'react';
import { CompoundNavigator } from './components/CompoundNavigator';
import { ProvidersSet } from './components/ProvidersSet';

export const App = () => (
  <ProvidersSet>
    <CompoundNavigator />
  </ProvidersSet>
);
