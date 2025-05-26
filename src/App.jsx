export default function App() {
  const articlesList = ["today", "tomorrow", "toyota"];

  return (
    <ul>
      {articlesList.map((article, index) => (
        <li key={index}>{article}</li>
      ))}
    </ul>
  );
}
