export function App() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>America/Chicago</th>
            {Array.from({ length: 24 }).map((_, i) => {
              const h = i;
              const [h12, m] =
                h >= 12 ? ([h - 12, "pm"] as const) : ([h, "am"] as const);

              return (
                <td>
                  {h12 == 0 ? 12 : h12}&thinsp;{m}
                </td>
              );
            })}
          </tr>
          <tr>
            <th>America/Chicago</th>
            {Array.from({ length: 24 }).map((_, i) => (
              <td>{i}</td>
            ))}
          </tr>
          <tr>
            <th>UTC</th>
            {Array.from({ length: 24 }).map((_, i) => (
              <td>{(i + 5) % 24}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
