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
   {
    joke: "[“hip”,”hip”]",
    punchline: "hip hip array!",
  },
   {
    joke: "How did pirates collaborate before computers?",
    punchline: "Pier to pier networking",
  },
   {
    joke: "I’m starting a band called HTML Encoder...",
    punchline: "Looking to buy a guitar & amp",
  },
   {
    joke: "As a programmer, when I feel the void...",
    punchline: "And I know I’ve reached the point of no return",
  },
   {
    joke: "Why did the functions stop calling each other?",
    punchline: "Because they had constant arguments",
  },
   {
    joke: "Why don’t bachelors like Git?",
    punchline: "Because they are afraid to commit.",
  },
   {
    joke: "My girlfriend is the root of -100",
    punchline: "A solid 10 but also imaginary"
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
if(lineIndex <= jokeArray.length - 1) {
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
} else {
    return (
       
        <div class="d-flex flex-column mt-3">
          <button
            type="button"
            class="btn btn-secondary"
            disable={true}
          >
              {`That's all folks!`}
          </button>
        </div>
      )
  
}

export default Joke;
