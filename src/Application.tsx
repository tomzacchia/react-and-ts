import React, { ChangeEvent } from "react";
import { fetchDogFacts, DogFactType } from "./dog-facts";

type FormProps = {
  onSubmit: (n: number) => void;
};

type SubmitHandler = (event: React.SyntheticEvent) => void;

const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = React.useState(1);

  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  const submitHandler: SubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
    onSubmit(value);
  };

  return (
    <form
      onSubmit={submitHandler}
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   onSubmit(value);
      // }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={value}
          onChange={changeCount}
          min="1"
          max="10"
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => setFacts(facts));
  };

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts && facts.map((fact) => <Fact key={fact.id} fact={fact.fact} />)}
      </section>
    </main>
  );
};

export default Application;
