import React from 'react';
import TestComponent from './TestComponent';
import income_groups from './data';
/**
 * App component
 * @param null
 */
const App = () => (
  <div className="App">
    <TestComponent
      segment_number={2}
      segment_age_group={'25-34'}
      segment_population={32219}
      total_population={120448}
      income_groups={income_groups} />
  </div>
);

export default App;
