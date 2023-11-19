import React from "react";
import Select, { SelectOption } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
  { label: "Six", value: 6 },
  { label: "Seven", value: 7 },
  { label: "Eight", value: 8 },
  { label: "Nine", value: 9 },
  { label: "Ten", value: 10 },
];

const App = () => {
  const [value1, setValue1] = React.useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = React.useState<SelectOption | undefined>(
    options[0]
  );
  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
};

export default App;
