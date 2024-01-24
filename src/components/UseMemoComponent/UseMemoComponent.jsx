import React, { useMemo } from 'react';

function UseMemoComponent({ data, setData }) {
  const heavyFunction = (num) => {
    for(let i = 0; i < 1000000000; i++) {
        num+=1;
    }
    return num;
  };

  const increment = () => setData((c) => c + 1);

  const calculatedValue = useMemo(() => heavyFunction(data), [data]);

  return (
    <div>
      <p>{data}</p>
      <button onClick={increment}>Add 1</button>
      <p>{calculatedValue}</p>
    </div>
  );
}

export default UseMemoComponent;
