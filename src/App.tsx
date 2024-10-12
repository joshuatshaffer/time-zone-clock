import { atom, useAtom } from "jotai";

const countAtom = atom(0);

export function App() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <select>
        {Intl.supportedValuesOf("timeZone").map((timeZone) => (
          <option key={timeZone} value={timeZone}>
            {timeZone}
          </option>
        ))}
      </select>
    </>
  );
}
