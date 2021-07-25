export const jokeArray = [
  {
    joke: "Why does 'Where's Waldo' only wear stripes?",
    punchline: "Cause he didn't want to be spotted!",
  },
  {
    joke: "Who designed King Arthur's round table?",
    punchline: "Sir-Cumference",
  },
  {
    joke: "Why do astronomers hate Orion's Belt?",
    punchline: "Cause it's a big waist of space!",
  },
  {
    joke: "What do you call a mouse that swears a lot?",
    punchline: "A cursor!",
  },
  {
    joke: "What was the pig doing in the kitchen?",
    punchline: "Bacon!",
  },
  {
    joke: "Why was the strawberry late for work?",
    punchline: "It was stuck in a jam!",
  },
];

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
    
   function stopAtEnd () {
        return lineIndex === jokeArray.length - 1;
    }
    
    let last = stopAtEnd ? "Next joke!" : "That's all folks!" ;


  // let pending =
  //     punchLineDisplay ? 'block' : 'none';

  return (
    <>
      <section class="container w-25">
        <div class="pt-5">
          <h4 class="text-center font-weight-bold">{singleJokeLine}</h4>
        </div>
        <div class="d-flex flex-column align-middle">
          <h3 class="text-center text-success mt-2" style={{ display: displayText }}>{singlePunchLine}</h3>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ display: buttonDisplay }}
            onClick={showPunchLine}
          >
            PUNCH LINE
          </button>
        </div>
        <div class="d-flex flex-column mt-3">
          <button
            type="button"
            class="btn btn-secondary"
            style={{ display: displayText }}
            onClick={cycle}
          >
            {last}
          </button>
        </div>
      </section>
    </>
  );
}

export default Joke;
