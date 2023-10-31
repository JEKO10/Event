import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";
import { AgendaArticle } from "../assets/style/Agenda.style";

const Agenda = () => {
  const body = `Agenda naučne konferencije sa međunarodnim učešćem
    <br/> <br/> 
   Izazovi i perspektive za razvoj opštine Berane kao preduslov za valorizaciju sjeverne regije Crne Gore - IZperaBA
    <br/> <br/> 
        <a
          href="/assets/documents/Agenda IZperaBA.doc"
          download
          style={{ fontSize: "1.3rem" }}
        >
          Preuzmite Agendu
        </a>
   `;

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Agenda konferencije" body={body} />
      <AgendaArticle>
        <h3>Prvi dan: 2.11.2013</h3>
        <p>Dolazak i prijava u hotel do 20:00 h.</p>
        <h3>Drugi dan: 3. 11. 2023</h3>
        <ul>
          <li>9:30 - 10:00 Registracija učesnika</li>
          <li>
            10:00 - 10:15 Otvaranje i Pozdravno obraćanje
            <span> Vuko Todorović, predsjednik Opštine Berane</span>
          </li>
          <li>10:15 - 10:30 Pozdravno obraćanje</li>
          <li>
            10:30 - 10:45 Pozdravno obraćanje i uvod u sesije mr
            <span> Novica Obradović, predsjednik Skupštine opštine Berane</span>
          </li>
        </ul>
        <h2>
          Prva sesija:{" "}
          <span>
            RAZVOJ TURIZMA I SAOBRAĆAJNE INFRASTRUKTURE KAO PREDUSLOV
            ZAUSTAVLJANJA MIGRACIJE STANOVNIŠTVA
          </span>
        </h2>
        <ul>
          <li>
            10:45 - 11:00 Berane- pametni grad,{" "}
            <span>
              emeritus prof, dr Zoran Avramović, Panevropski univerzitet
              APEIRON, Banja Luka, Republika Srpska, BiH
            </span>
          </li>
          <li>
            11:00 - 11:15 Turizam kao pokretač razvoja ruralnih prostora,
            <span>
              {" "}
              dr Marija Kostić, dr Sonja Veljović. mr Jovan Bugarčić,
              Univerzitet u Kragujevcu, Srbija
            </span>
          </li>
          <li>
            11:15 - 11:30 Praksa cirkularne ekonomije na lokalnom nivou,
            <span>
              {" "}
              prof. dr Dušica Pešević, Univerzitet u Banjoj Luci, Republika
              Srpska, BiH
            </span>
          </li>
          <li>
            11:30 - 11:45 Ruralni turizam kao pokretač razvoja ruralnih područja
            Crne Gore sa posebnim osvrtom na opštinu Berane,
            <span>
              {" "}
              prof. dr Drago Cvijanović, mr Suzana Lazović, Univerzitet u
              Kragujevcu, Srbija
            </span>
          </li>
          <li>
            11:45 - 12:00 Analiza sentimenta u turističkim recenzijama hotela iz
            regiona Berana primjenom metoda mašinskog učenja,
            <span>
              {" "}
              Anes Murić, prof. dr Ljiljana Kašćelan, dr Sunčica Vuković,
              Univerzitet Crne Gore
            </span>
          </li>
          <li>
            12:00 - 12:15 Stanovništvo sjevernog regiona Crne Gore stanje i
            perspektiva sa posebnim osvrtom na opštinu Berane,
            <span>
              {" "}
              prof. dr Miroslav Doderović, mr Ivan Mijanović, Univerzitet Crne
              Gore
            </span>
          </li>
          <li>
            12:15 - 12:30 Spomen kuća vojvode Gavra Vukovića i diplomatska
            akademija u funkciji razvoja kulturnog turizma,
            <span> prof. dr Draško Došljak, Univerzitet Crne Gore</span>
          </li>
          <li>
            12:30 - 12:45 Identifikacija pogodnih lokacija za primenu solarne
            energije na teritorije opštine Berane,
            <span>
              {" "}
              mr Ivan Mijanović, prof.dr Miroslav Doderović, Ministarstvo
              ekologije, prostornog planiranja i urbanizma, Podgorica, Crna Gora
            </span>
          </li>
          <li>
            12:45 - 13:00 Mali i srednji gradovi sjeverne regije Crne Gore:
            Ekonomska renesansa ili stagnacija,
            <span>
              {" "}
              prof.dr Senka Šekularac-Ivošević, Univerzitet Crne Gore
            </span>
          </li>
          <li>
            13:00 - 13:15 Stavovi stanovnika Berana o važnosti engleskog jezika
            za razvoj turizma,
            <span>
              {" "}
              doc.dr Marija Vešović, Univerzitet Adriatik Bar, doc.dr Jelena
              Rajović, Akademijski strukovnih studija kosovsko metohijska,
              Kosovo*, Srbija, doc. dr Jelena Lekić
            </span>
          </li>
          <li>
            13:15-13:45<span> Ručak</span>
          </li>
        </ul>
        <h2>
          Druga sesija:{" "}
          <span>
            RAZVOJ POLJOPRIVREDE KAO PREDUSLOV POBOLJŠANJA STANDARDA GRAĐANA
          </span>
        </h2>
        <ul>
          <li>
            13:45 - 14:00 Ekološko sanitarne i agroekonomske posledice hemijskog
            zagađenja zemljišta i njihovo suzbijanje u cilju podsticanja
            privrednog razvoja,{" "}
            <span>
              prof. dr Dragutin Đukić, Leka Mandić, Univerzitet Kragujevac,
              Srbija, Monika Stojanova, Poljoprivredno-prehrambeni fakultet
              Skoplje, Makedonija, Aleksandar Semenov, Moskovski državni
              univerzitet, Moskva Rusija, Vesna Đurović Univerzitet Kragujevac,
              Srbija, Univerzitet Kragujevac, Srbija
            </span>
          </li>
          <li>
            14:00 - 14:15 Zašto je mala Srbija veliki svetski proizvođač i
            izvoznik smrznute maline,{" "}
            <span>
              prof.dr Tomo Milošević, prof.dr Nebojša Milošević, prof.dr Ivan
              Glišić, mr Radmila Ilić, Univerzitet u Kragujevcu, Srbija,
              Univerzitet u Kragujevcu, Srbija
            </span>
          </li>
          <li>
            14:15 - 14:30 Unapređenje gajenja šljive u opštini Berane,
            <span>
              {" "}
              dr Darko Jevremović, dr Nebojša Milošević, dr Ivana Glišić,
              Institut za voćarstvo, Čačak, Srbija, Institut za voćarstvo,
              Čačak, Srbija
            </span>
          </li>
          <li>
            14:30 - 14:45 Održivi razvoj biomanufaktura za proizvodnju zdravije
            hrane dodate vrednosti- cirkularna ekonomija sa “ozelenjavanjem”
            poslovanja u rešavanju eko- demografskih izazova,
            <span>
              {" "}
              prof.dr Vladimir S. Kurćubić Univerzitet u Kragujevcu, Srbija,
              prof.dr Slaviša B. Stajić, Univerzitet u Beogradu, Srbija,
              Univerzitet u Kragujevcu, Srbija, Univerzitet u Beogradu, Srbija
            </span>
          </li>
          <li>
            14:45 - 15:00 Kvalitet vina Vranac Riječkog subregiona,
            <span>
              {" "}
              mr Hristina Šekularac, Ministarstvo poljoprivrede, šumarstva i
              vodoprivrede, doc.dr Danijela Raičević, doc.dr Tatjana Popović,
              prof.dr Radmila Pajović- Šćepanović, mr Ivana Malović, Univerzitet
              Crne Gore, Ministarstvo poljoprivrede, šumarstva i vodoprivrede,
              Univerzitet Crne Gore
            </span>
          </li>
          <li>
            15:00 - 15:15 Prozvodnja krompira u polimsko-ibarskom rejonu u
            svijetlu klimatskih promjena,
            <span>
              {" "}
              prof.dr Zoran Jovović, Milica Bućković Univerzitet Crne Gore,
              Univerzitet Crne Gore
            </span>
          </li>
          <li>
            15:15- 15:30 Prirodni resursi (pašnjaci, livade i oranice) kao
            preduslov za održivi razvoj stočarstva u opštini Berane,{" "}
            <span>
              mr Miodrag Rajković, redovni član akademije veterinarske medicine
              SVD, Vladimir Đaković Uprava za bezbjednost hrane, veterinu i
              fitosanitarne poslove
            </span>
          </li>
          <li>
            15:30- 15:45 Uticaj proređivanja plodova na krupnoću ploda
            autohtonih sorti kruške sa područja gornjeg Polimlje,
            <span> dr Gordana Šebek </span>
          </li>
          <li>
            15:45-16:00 Tradicionalni proizvodi od samoniklih voćnih vrsta u
            Crnoj Gori,
            <span>
              {" "}
              dr Đina Božović, mr Anđela Ljujić, dr Vučeta Jaćimović Univerzitet
              Crne Gore
            </span>
          </li>
          <li>
            16:00- 16:30 <span> Pauza za kafu</span>
          </li>
          <li>
            16:30 - 16:45 Očuvanje autohtonih rasa domaćih životinja u Crnoj
            Gori,
            <span>
              {" "}
              mr Milena Đokić, prof.dr Božidarka Marković, prof. dr Milan
              Marković, dr Dušica Radonjić, Miljan Veljić, Univerzitet Crne Gore
            </span>
          </li>
          <li>
            16:45 - 17:00 Vektori, bitni ili ne, doc.dr Igor Pajović,
            Univerzitet Crne Gore,
            <span>
              {" "}
              dr Nebojša Sekulić, Institut za javno zdravlje Crne Gore
            </span>
          </li>
          <li>
            17:00 - 17:15 Polimljem sa Prijedolske glave, Bjelasice, Komova i
            Prokletija do Berana: Modeliranje globalnog izazova erozije
            zemljišta i oticaja iz slivova,
            <span> prof.dr Velibor Spalević, Univerzitet Crne Gore</span>
          </li>
          <li>
            17:15 - 18:00 Zatvaranje naučnog dijela konferencije, otvaranje
            diskusije
            <span> mr Novica Obradović u ime organizatora konferencije</span>
          </li>
          <li>
            20:00
            <span>
              {" "}
              Svečana večera u organizaciji Opštine Berane - Hotel Berane
            </span>
          </li>
          <li>
            <span>
              (Promocija knjige “Pitomina divljih predjela” autora Gojka
              Kneževića)
            </span>
          </li>
        </ul>
        <h3>
          Treći dan: <span>4. 11. 2023.</span>
        </h3>
        <ul>
          <li>11:00 Okupljanje ispred Zgrade Opštine</li>
          <li>11:15 Izlet</li>
          <li>13:00 Ručak</li>
        </ul>
      </AgendaArticle>
    </section>
  );
};

export default Agenda;
