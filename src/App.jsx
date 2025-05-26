import { useState } from "react";

export default function App() {
  const [articlesList, setArticlesList] = useState([
    "today",
    "tomorrow",
    "toyota",
  ]);
  const [newArticle, setNewArticle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (newArticle.length === 0) {
      alert("Campo vuoto");
    } else setArticlesList([...articlesList, newArticle]);
    setNewArticle("");
  };

  const deleteHandler = (toDeleteArticle) => {
    const deletedArticleList = articlesList.filter(
      (article) => article != toDeleteArticle
    );
    setArticlesList(deletedArticleList);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-5">
          <form onSubmit={submitHandler} className="form-control">
            <input
              onChange={(e) => setNewArticle(e.target.value)}
              className="form-control col-auto my-5"
              type="text"
              value={newArticle}
            />
          </form>
        </div>
        <ul className="d-flex flex-column gap-3">
          {articlesList.map((article, index) => (
            <li key={index}>
              {article}
              <button
                onClick={() => deleteHandler(article)}
                className="btn btn-danger m-3"
              >
                Elimina
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
