import { useState, ChangeEvent } from "react";
import { SurveyContainer } from "../assets/style/Survey.style";
import SurveyImg from "../assets/images/survey.png";

const Survey = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section>
      <img src={SurveyImg} alt="SurveyImg" style={{ textAlign: "right" }} />
      <SurveyContainer>
        <h2>
          Da li ćete doći na <br /> <span> IZperaBA</span>?
        </h2>
        <article>
          <div>
            <div>
              <input
                type="radio"
                name="da"
                id="da"
                value="da"
                checked={selectedOption === "da"}
                onChange={handleChange}
              />
              <label>Da, dolazim</label>
            </div>
            <div>
              <p>Glasova: 120</p>
              <p>32%</p>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                name="ne"
                id="ne"
                value="ne"
                checked={selectedOption === "ne"}
                onChange={handleChange}
              />
              <label>Ne, ne dolazim</label>
            </div>
            <div>
              <p>Glasova: 120</p>
              <p>32%</p>
            </div>
          </div>
        </article>
        <button>Glasaj</button>
      </SurveyContainer>
    </section>
  );
};

export default Survey;
