// import { useState, ChangeEvent } from "react";
// import { SurveyContainer } from "../assets/style/Survey.style";
// import SurveyImg from "../assets/images/survey.png";
import { Model } from "survey-react";
import * as SurveyReact from "survey-react";

const Survey = () => {
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

  const survey = new Model(surveyJson);
  console.log(survey.data);

  //   const [selectedOption, setSelectedOption] = useState("");

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     setSelectedOption(event.target.value);
  //   };

  //   const surveyJson = {
  //     surveyId: "7541edd9-d48e-448f-b47b-f7da2024afed",
  //     surveyPostId: "addece68-e4b8-4d21-94ef-c984d02b70f4",
  //     surveyShowDataSaving: true,
  //   };

  return (
    <SurveyReact.Survey
      onComplete={(survey: any) => {
        console.log(survey.data);
      }}
      json={{
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
      }}
    />
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
