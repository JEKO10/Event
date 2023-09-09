import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";

const Committees = () => {
  return (
    <>
      <SinglePageNav />
      <SinglePageHeader
        title="Odbori"
        body="Organizacioni Naučni
      Dr Božo Krstajić, Elektrotehnički fakultet, UCG, Podgorica, MNE - Predsjedavajući konferencije
Dr Žarko Zečević, Elektrotehnički fakultet, UCG, Podgorica, MNE
Dr Milutin Radonjić, Elektrotehnički fakultet, UCG, Podgorica, MNE
Dr Sandra Tinaj, Univerzitet Donja Gorica, Podgorica, MNE
Dr Tomo Popović, Fakultet za informacione sisteme i tehnologije, UDG, Podgorica, MNE
Dr Srđan Krčo, DunavNET, Novi Sad, SRB
Vladan Tabaš, dipl.ing., Čikom, Podgorica, MNE
      "
      />
    </>
  );
};

export default Committees;
