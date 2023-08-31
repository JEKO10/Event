// import { useState, ChangeEvent } from "react";
// import { SurveyContainer } from "../assets/style/Survey.style";
// import SurveyImg from "../assets/images/survey.png";
// import { useState } from "react";
import { SurveyModel, GetResultEvent } from "survey-react";
import * as SurveyReact from "survey-react";

const Survey = () => {
  //   const [answers, setAnswers] = useState(0);
  const surveyJson = {
    surveyId: "7541edd9-d48e-448f-b47b-f7da2024afed",
    surveyPostId: "addece68-e4b8-4d21-94ef-c984d02b70f4",
    surveyShowDataSaving: true,
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "checkbox",
            name: "IZperaBA",
            title: "Da li ćete doći na IZperaBA?",
            isRequired: true,
            choices: [
              {
                value: "Da",
                text: "Da, dolazim",
              },
              {
                value: "Ne",
                text: "Ne, ne dolazim",
              },
            ],
            maxSelectedChoices: 1,
            minSelectedChoices: 1,
          },
        ],
      },
    ],
  };

  const handleGetResult = (_: SurveyModel, options: GetResultEvent) => {
    if (options.success) {
      console.log("Question results:", options.data.QuestionResult);
    } else {
      console.log("Failed to retrieve question results");
    }
  };

  const handleSurveyComplete = (survey: SurveyModel) => {
    const npsQuestion = survey.getResult(
      "3f15df89-fe1b-4411-bb73-13ac12542096",
      "IZperaBA"
    );

    console.log(npsQuestion);

    survey.onGetResult.add(handleGetResult);
  };

  return (
    <SurveyReact.Survey onComplete={handleSurveyComplete} json={surveyJson} />
    // <section>
    //   <div>
    //     <img src={SurveyImg} alt="SurveyImg" style={{ textAlign: "right" }} />
    //   </div>
    //   <SurveyContainer>
    //     <h2>
    //       Da li ćete doći na <br /> <span> IZperaBA</span>?
    //     </h2>
    //     <article>
    //       <div>
    //         <div>
    //           <input
    //             type="radio"
    //             name="da"
    //             id="da"
    //             value="da"
    //             checked={selectedOption === "da"}
    //             onChange={handleChange}
    //           />
    //           <label>Da, dolazim</label>
    //         </div>
    //         <div>
    //           <p>Glasova: 120</p>
    //           <p>32%</p>
    //         </div>
    //       </div>
    //       <div>
    //         <div>
    //           <input
    //             type="radio"
    //             name="ne"
    //             id="ne"
    //             value="ne"
    //             checked={selectedOption === "ne"}
    //             onChange={handleChange}
    //           />
    //           <label>Ne, ne dolazim</label>
    //         </div>
    //         <div>
    //           <p>Glasova: 120</p>
    //           <p>32%</p>
    //         </div>
    //       </div>
    //     </article>
    //     <button>Glasaj</button>
    //   </SurveyContainer>
    // </section>
  );
};

export default Survey;
