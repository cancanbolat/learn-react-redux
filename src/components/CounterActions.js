import React from 'react';

export default function CounterActions({ count, setCount }) {
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Azalt (-)</button>
            <button onClick={() => setCount(count + 1)}>Artır (+)</button>
        </div>
    );
}
