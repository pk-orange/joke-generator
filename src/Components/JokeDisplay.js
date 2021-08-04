import { jokeArray } from "./data/jokeData";

function Joke({
  cycle,
  punchLineDisplay,
  punchLineData,
  lineIndex,
  showPunchLine,
}) {
  const { displayText, buttonDisplay } = punchLineData;

  const jokeOutput = jokeArray[lineIndex];

  const singleJokeLine = jokeOutput.joke;
  const singlePunchLine = jokeOutput.punchline;

  function stopAtEnd() {
    return lineIndex === jokeArray.length - 1;
  }

  let last = stopAtEnd ? "NEXT JOKE!" : "That's all folks!";

  // let pending =
  //     punchLineDisplay ? 'block' : 'none';
  if (lineIndex < jokeArray.length - 1) {
    return (
      <>
        <div class="d-flex justify-content-center">
        <div class="card border-dark bg-dark text-center w-50 rounded">
          <div class="card-header mb-5 h1 bg-dark text-white-50"><strong>Dad Jokes</strong></div>
          <div class="card-body bg-dark">
            <h2 class="card-title mb-4 text-white">{singleJokeLine}</h2>
            <h3 class="card-text text-info mb-5" style={{ display: displayText }}>
              <strong>{singlePunchLine}</strong>
            </h3>
            <div class="d-grid gap-2 col-6 mx-auto">

            
            <button
              type="button"
              class="btn btn-info text-dark"
              style={{ display: buttonDisplay }}
              onClick={showPunchLine}
            >
              <strong>PUNCH LINE</strong>
            </button>

            <button
              type="button"
              class="btn btn-info"
              style={{ display: displayText }}
              onClick={cycle}
            >
                  <strong>{last}</strong>
              </button>
              </div>
          </div>
          <div class="card-footer text-muted">"A joke becomes a dad joke... when it's apparent!"</div>
        </div>



     
          </div>
      </>
    );
  } else {
    return (
      <div class="d-flex flex-column mt-3">
        <button type="button" class="btn btn-secondary" disable={true}>
          {`That's all folks!`}
        </button>
      </div>
    );
  }
}

export default Joke;
