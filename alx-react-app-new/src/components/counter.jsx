import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '5px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;