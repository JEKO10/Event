import { Main } from "../assets/style/Sidebar.style";
import Sidebar from "./Sidebar";
import Survey from "./Survey";

const MainContainer = () => {
  const invitationText = `
Poštovani,

   Zadovoljstvo nam je pozvati Vas na prvu naučnu Кonferenciju sa međunarodnim učešćem pod nazivom: Izazovi i perspektive za razvoj opštine Berane kao preduslov za valorizaciju sjeverne regije Crne Gore – IZperaBA, koju organizuje  Opština Berane. 

Na osnovu informacija koje smo dobili iz dosta izvora da je tokom oktobra  već zakazan veliki broj konferencija u drugim visokoškolskim ustanovama, odlučili smo da održavanje ove konferencije pomjerimo za 2 - 4. 11. 2023. godine u  Beranama, u svečanoj sali Hotela Berane. Izvinjavamo se zbog pomjeranja prvobitno planiranog datuma, ali smatramo da ćete ovako imati više vremena da spremite radove ne remeteći unaprijed preuzete obaveze. 

Imajući u vidu da je sjever Crne Gore, više od decenije ugrožen velikom migracijom stanovništva, smatrali smo da je neophodno razmotriti koji su to izazovi sa kojima se opština Berane, kao nekadašnji razvojni centar sjevera Crne Gore suočava i na koji način može, ako ne zaustaviti, onda smanjiti migraciju stanovništva iz ove opštine.
Cilj Konferencije:  Izazovi i perspektive za razvoj opštine Berane kao preduslov za valorizaciju sjeverne regije Crne Gore – IZperaBA je, da se  kroz sagledavanje svih izazova sa kojima se sjeverna regija suočava dođe do perspektiva koje će pomoći u samoj valorizaciji, kako opštine Berane, tako i čitave sjeverne regije, i na taj način pokuša  smanjiti migracija stanovništva.

Podsticanje ekonomskog razvoja i jačanje konkurentnosti privrede, valorizacija prirodnih resursa, razvoj turizma kao i ulaganja i razvoj  poljoprivrede uz bolju saobraćajnu infrastrukturu, po našem mišljenju  su glavne perspektive preko kojih možemo podići svijest kod stanovništva sjeverne regije. Nema nepremostivih prepreka, ukoliko postoji dobra volja da se one riješe.

Kao organizator Konferencije, Opština Berane nastoji okupiti domaće i međunarodne naučnike i stručnjake koji bi svojim učešćem dali doprinos prezentiranju novih znanja i razmijenili iskustva u vođenju naučnih i stručnih rasprava iz tematske oblasti Konferencije. Ovim putem Vas kao stručnjaka molimo da uzmete učešće u ovoj Konferenciji pisanjem rada na temu koja se uklapa u naziv i cilj Konferencije, a koja je iz Vašeg polja djelovanja. Vrijeme predviđeno za izlaganje  je do  15 minuta, naravno uz mogućnost produženja ukoliko tema rada zahtijeva više vremena za predstavljanje. Štampaće se i Zbornik radova.

Molimo Vas da najkasnije do 5.10.2023. godine, dostavite naziv i rezime rada na maternjem i engleskom jeziku po  Uputstvu za dostavljanje radova koje je u prilogu. 

Kotizaciju (koja obuhvata smještaj, hranu kao i štampanje Zbornika) snosi organizator.

Uz zahvalnost, želeći Vam uspjeh u daljem radu, srdačno Vas pozdravljam i radujem se Vašem učešću na Konferenciji

S poštovanjem,

Predsjednik Skupštine  Opštine Berane                                                                             
Mr Novica Obradović 
`;

  return (
    <Main>
      <Sidebar />
      <article>
        <h1>
          Naučna konferencija <br /> <span>IZperaBA Berane</span>
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: invitationText.replace(/\n/g, "<br>"),
          }}
        />
      </article>
      <Survey />
    </Main>
  );
};

export default MainContainer;
