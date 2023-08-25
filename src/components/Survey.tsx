import { useState, ChangeEvent } from "react";
import { SurveyContainer } from "../assets/style/Survey.style";

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SurveyContainer>
      <p>Da li ćete doći na događaj?</p>
      <article>
        <div>
          <label>Da</label>
          <input
            type="radio"
            name="da"
            id="da"
            value="da"
            checked={selectedOption === "da"}
            onChange={handleChange}
          />
          <p>
            Glasova: <br /> 120
          </p>
        </div>
        <div>
          <label>Ne</label>
          <input
            type="radio"
            name="ne"
            id="ne"
            value="ne"
            checked={selectedOption === "ne"}
            onChange={handleChange}
          />
          <p>
            Glasova: <br /> 120
          </p>
        </div>
      </article>
      <button>Glasaj</button>
    </SurveyContainer>
  );
};

export default Survey;
