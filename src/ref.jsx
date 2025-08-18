import React, { use } from 'react'

function ref() {
    const inputRef = useRef(null);
    const renderCount = useRef(0);
    const [text, setText] = useState('');

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    renderCount.current += 1;
  return (
    <>
    <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
    <p>Render : {renderCount.current} Item</p>
    <button onClick={() => (inputRef.current.value = '')}>Clear Dom</button>
    </>
  )
}

export default ref