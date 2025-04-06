import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vite + React + TypeScript</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
