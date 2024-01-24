import React, { useState } from 'react';
import UseMemoComponent from './components/UseMemoComponent/UseMemoComponent';
import UseCallbackComponent from './components/UseCallbackComponent/UseCallbackComponent';

function App() {
  const [data, setData] = useState(0);

  return (
    <div>
      <UseMemoComponent data={data} setData={setData} />
      <UseCallbackComponent data={data} setData={setData} />
    </div>
  );
}


export default App;
