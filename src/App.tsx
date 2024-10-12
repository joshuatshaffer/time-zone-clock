import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export function App() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}
