import { useState, useEffect } from "react";

// export default () => {
//   const [joke, setJoke] = useState();
//   const [clicked, isClicked] = useState(false);
//   const [reload, setReload] = useState(false);

//   useEffect(() => {
//     fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
//       .then((response) => response.json())
//       .then((obj) => setJoke(obj))
//       .catch((error) => console.error(error));
//   }, [reload]);

//   return (
//     <>
//       <div>
//         {joke === undefined ? (
//           "Loading"
//         ) : (
//           <div>
//             <h3>{joke.setup}</h3>

//             {clicked === true ? (
//               <div>
//                 <p>{joke.delivery}</p>
//                 <button
//                   onClick={() => setClicked(!clicked)}
//                   onClick={() => setReload(!reload)}
//                 >
//                   Reload
//                 </button>
//               </div>
//             ) : (
//               <button onClick={() => isClicked(!clicked)}>Show Error</button>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

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
                    setClick(!click);
                    setReload(!reload);
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
