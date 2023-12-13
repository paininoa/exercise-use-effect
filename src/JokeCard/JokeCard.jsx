import { useState, useEffect } from "react";

export default () => {
  const [joke, setJoke] = useState();
  const [click, setClick] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => response.json())
      .then((obj) => setJoke(obj))
      .catch((error) => console.error(error));
  }, [reload]);

  return (
    <>
      <div>
        {joke === undefined ? (
          "Loading..."
        ) : (
          <div>
            <h2>{joke.setup}</h2>
            {click === true ? (
              <div>
                <p>{joke.delivery}</p>
                <button
                  onClick={() => {
                    return setClick(!click), setReload(!reload);
                  }}
                >
                  Reload
                </button>
              </div>
            ) : (
              <button onClick={() => setClick(!click)}>Answer</button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
