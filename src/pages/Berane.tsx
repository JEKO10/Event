import { Image, Main } from "../assets/style/SinglePage.style";
import BeraneIMG from "../assets/images/berane.jpg";
import Centar from "../assets/images/banner2.jpg";
import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";
import BeraneImg2 from "../assets/images/img2.jpg";
import BeraneImg1 from "../assets/images/img1.jpg";

const Berane = () => {
  const bodyHeader = [
    `Berane se nalazi u istočnom dijelu Crne Gore i zahvata sjeverni dio Gornjeg Polimlja. Prema jugu
graniči se sa Andrijevicom, prema istoku granica se nalazi na planinama Mokra, Murgaš, Cmiljevica,
Turjak i padina Cmiljevice prema opštini Rožaje. Prema sjeveru granica se nalazi iza Police sa opštinom
Petnjica i opštinom Bijelo Polje. Zapadna granica opštine se nalazi na najvišim vrhovima Bjelasice,
Strmenica, Crna Glava, Zekova Glava i padina Ključa, prema opštinama Mojkovac i Kolašin.`,
    `Na najnižoj nadmorskoj visini nalazi se dolina Lima, nizvodno od Tivranske klisure, na 640
metara, a na najvisočijoj Crna Glava na Bjelasici na 2.139 metara. Beranska kotlina se pruža u dužini od 9
kilometara, širine 3 do 5 kilometara. Sredinom kotline protiče rijeka Lim, koja predstavlja značajan
privredni hidropotencijal opštine.`,
    `Pored Lima hidrografsku mrežu čine brojni vodotoci, jezera, izvori i vrela. Među njima se
izdvajaju glečerska jezera: Pešića jezero, Veliko i Malo Ursulovačko jezero, Veliko i Malo Šiško jezero koja
upotpunjuju prelijepi pejzaž Bjelasice i daju joj posebnu draž.`,
  ];

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader title="O Beranama" body={bodyHeader} />
      <Main>
        <article>
          <p>
            O bogatoj istorijskoj prošlosti Berana svjedoče brojna nalazišta i
            lokaliteti još iz vremena 4000 godina prije nove ere, kao što su:
            Berankrš, Petnjik, Ržanica, Gradac, Rudeš, Lužac, Dolac, Budimlja,
            Luge, Zagrađe, Jasikovac... Brojni nalazi govore da je današnje
            područje Berana bilo naseljeno još u neolitsko doba i doba Ilira.
          </p>
          <p>
            U srednjem vijeku područje Berana je bilo poznato kao Budimlja. Bilo
            je od velikog ekonomskog, religioznog političkog znajača u srpskoj
            zemlji Raškoj. Mnoštvo manastira i crkava u blizini grada svjedoče o
            bogatom duhovnom životu tadašnjih Srba. U Beranama se nalazi
            zadužbina Nemanjića Đurđevi Stupovi.
          </p>
          <p>
            Na mjestu gdje se danas nalazi, do 1862. godine nije bilo nijedne
            kuće. Poslije bitke na Rudešu za potrebe turske vojske podignuto
            vojno uporište. Naselje se sporo širilo jer se pravoslavno
            stanovništvo nerado odlučivao da podiže domove pored turskog logora.
            Berane je kao gradsko naselje formirano u drugoj polovini XIX
            vijeka, tačnije 1862. godine po zapovjedi turskog vojskovođe
            Husein-paše. On je naredio vojsci da se na lijevoj obali Lima, na
            mjestu gdje se danas nalazi opšta bolnica, podigne kamena kasarna za
            potrebe vojne uprave.
          </p>
          <p>
            Naselje je počelo brzo da se širi, a na desnoj obali Lima na
            Prosinama nastalo je drugo naselje u podnožju brda Jasikovac, gdje
            su stanovali turski oficiri islužbenici sa brojnim ženama u
            haremima. Po tim haremima je dio varoši nazvan Hareme. Turci su na
            Jasikovcu izgradili tvrđavu i most na Limu.
          </p>
          <p>
            Tokom vijekova Gornje Polimlje je više puta mijenjalo ime. O
            porijeklu naziva Berane postoje različita i podijeljena mišljena.
            Jedni smatraju da je još u XIV vijeku nastalo Beranselo, koje je
            tokom vijekova uraslo u gradsko jezgro, te da je od toga kasnije i
            gradsko naselje dobilo ime Berane. Po mišljenju prof. dr. Milisava
            Lutovca naziv Berane je nastalo od turske riječi Bir-hane, što u
            prijevodu znači jedna kuća. Berane je oslobođeno od turske vlasti u
            Prvom balkanskom ratu, 16. oktobra 1912. godine kada je crnogorska
            vojska ušla u grad.
          </p>
          <p>
            Od jula 1949. do marta 1992. godine grad je nosio ime Ivangrad, po
            narodnom heroju Ivanu Milutinoviću (1901-1944).
          </p>
        </article>
        <article>
          <img src={BeraneIMG} alt="OPSTINA Berane" />
        </article>
      </Main>
      <Image>
        <img src={Centar} alt="Centar Berane" />
        <p>
          Na području opštine Berane živi 28.488 stanovnika, od čega je 14.238
          žena ili 49,98% i 14.250 muškaraca ili 50,02 %. U urbanom gradskom
          jezgru živi 11.073, u prigradskim naseljima 13.055, a u ruralnim
          područjima 4.360 stanovnika. Ovaj podatak najbolje odslikava
          nesrazmjeru u naseljenosti opštine Berane.
        </p>
        <p>
          Skoro samom sredinom opštine teče kompozitna dolina Lima daleko
          najvažnija privredna i saobraćajna veza prema subregionalnim
          prostorima na sjeveru i jugu opštine. Iako je još uvijek nerazvijena,
          ona spada u grupu najbogatijih opština po veličini poljoprivrednih i
          obradivih zemljišta, po pošumljenosti i zalihama šumske mase,
          bogatstvu površinskih i podzemnih voda, rezervama uglja, laporca i
          gline i, što je osobito važno po očuvanosti životne sredine i
          raznovrsnosti geobiodiverziteta.
        </p>
        <img src={BeraneImg1} alt="Berane" />
        <p>
          Nasuprot ograničenjima (ozbiljna razvojna zaostalost u odnosu na
          Primorski i Središnji region), geografski položaj Berana odlikuje se i
          specifičnim obilježjima koja imaju veoma važnu razvojnu ulogu u
          budućnosti.
        </p>
        <p>
          Razvojna uloga Berana sadržana je u visokom stepenu funkcionalnosti
          njenog geografskog položaja, ispoljene kroz: 1) polivalentnost
          područja, koja proističe iz prožimanja različitih geografskih cjelina
          u okruženju (Bjelasica i Komovi na jednoj, dolina Ibra i Lima na
          drugoj, planinski lanci Prokletija, na trećoj strani), sa raznolikim
          prirodnim uslovima za uspostavljanje i razvoj širokog spektra
          djelatnosti (industrija, rudarstvo, poljoprivreda, turizam, šumarstvo,
          mala i srednja privreda i dr.); 2) kontaktnost područja, pri čemu se
          posebno ističe prigranični položaj znatnog dijela teritorije opštine
          prema susjednoj Albaniji, Kosovu i Srbiji; 3) tranzitnost područja,
          koja karakteriše ovaj prostor još iz vremena karavanskog trgovačkog
          prometa između južnojadranskih luka prema širokom kontinetalnom zaleđu
          i između srednjovjekovnih država Raške i Zete.
        </p>
        <p>
          Važna razvojna uloga ovog obilježja geografskog položaja opštine
          Berane posebno će doći do izražaja izgradnjom planiranih modernih
          saobraćajnica (autoputeva i željezničke pruge), a iznad svih autoputa
          Bar – Boljare - Beograd, koji će presijecati prostor ove opštine i
          predstavljaće moćno i trazitno područje između našeg Primorja,
          Središnjeg i Sjevernog regiona Podunavlja i Evrope, sa moravsko –
          vardarskim saobraćajnim koridorom, a preko njega sa crnogorskim
          prostorom, Malom Azijom i Bliskim Istokom. Nakon izgradnje pomenutih
          kopnenih saobraćajnica i aerodruma u Beranama, otvoriće se široki i
          dinamični razvojni tokovi, ne samo na ovom području i Sjevernoj Crnoj
          Gori, nego i na čitavom prostoru Crne Gore.
        </p>
        <img src={BeraneImg2} alt="Berane" />
        <p>
          Putem sledećeg linka možete preuzeti Strateški plan Berana:
          <a href="/src/assets/documents/strateski-plan.pdf" download>
            Preuzmite Strateški plan Berana
          </a>
        </p>
      </Image>
    </>
  );
};

export default Berane;
