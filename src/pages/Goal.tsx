import React from "react";
import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";

const Goal = () => {
  const body = `Imajući u vidu da je sjever Crne Gore, više od decenije ugrožen velikom
        migracijom stanovništva, smatrali smo da je neophodno razmotriti koji su
        to izazovi sa kojima se opština Berane kao nekadašnji razvojni centar
        sjevera Crne Gore, suočava i na koji način može, ako ne zaustaviti onda,
        smanjiti migraciju stanovništva iz ove opštine. Te je s toga glavni cilj
        ove Konferencije da kroz sagledavanje svih izazova sa kojima se sjeverna
        regija suočava dođemo do perspektiva koje će pomoći i u samoj
        valorizaciji kako opštine Berane tako i čitave sjeverne regije i na taj
        način smanjiti migraciju stanovništva.`;

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader
        title={"Cilj konferencije"}
        body={body}
      ></SinglePageHeader>
    </>
  );
};

export default Goal;
