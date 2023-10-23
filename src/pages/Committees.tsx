// import { Image } from "../assets/style/SinglePage.style";
import { Image } from "../assets/style/SinglePage.style";
import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";

const Committees = () => {
  const body = [
    "Mr Novica Obradović, predsjednik SO Berane",
    "Docent dr Marija Vešović",
    "Jelena Raković",
    "Hana Međedović",
  ];

  const mainBody = [
    "Prof. dr Agota Dregelyi – Kiss, vanredni profesor, Univerzitet Obuda, Mađarska;",
    "Prof. dr Andras Horvath, vanredni profesor, Univerzitet Obuda, Mađarska;",
    "Prof. dr Slobodan Bojanić, redovni profesor, Politehnički univerzitet Madrid, Španija;",
    "Prof. dr Drago Sever, redovni profesor, Univerzitet u Mariboru, Slovenija;",
    "Prof. dr Nebojša Arsić, rektor Univerziteta u Prištini sa privremenim sjedištem u Kosovskoj Mitrovici;",
    "Prof. dr Zoran Avramović, emeritus, akademik Ruske akademije nauka;",
    "Prof. dr Božidar Popović, dekan Elektrotehničkog fakulteta Univerziteta u Istočnom Sarajevu, Bosna i Hercegovina;",
    "Prof. dr Tomo Milošević, dekan Agronomskog fakulteta Univerziteta u Kragujevcu, Srbija;",
    "Prof. dr Dragutin Đukić, redovni profesor, Agronomski fakultet Univerziteta u Kragujevcu, Srbija;",
    "Docent dr Frosina Babanovska Milenovska, Fakultet za zemljodelski nauki i hrana, Skoplje, Makedonija;",
    "Prof. dr Dejan Gurešić, dekan Prirodno metematičkog fakulteta Univerziteta u Prištini sa privremenim sjedištem u Kosovskoj Mitrovici;",
    "Prof. dr Radoje Vujadinović, dekan Mašinskog fakulteta UCG, Cna Gora;",
    "Prof. dr Jelena Premović, viši naučni saradnik Ekonomskog fakulteta u Prištini sa privremenim sjedištem u Kosovskoj Mitrovici; docent na Univerzitetu Privredna akademija, Fakultet za ekonomiju i inžinjerski menadžment FIMEK, Novi Sad, Srbija;",
    "Prof. dr Ljiljana Kašćelan, redovni profesor, Ekonomski fakultet Univerziteta Crne Gore;",
    "Prof. dr Velibor Spalević, vanredni profesor, Biotehnički fakultet, Podgorica, Crna Gora;",
    "Prof. dr Marija Janković, dekan fakulteta za ekonomiju i biznis Univerziteta Mediteran, Crna Gora;",
    "Dr Danijela Raičević, docent, Biotehnički fakultet, Podgorica, Crna Gora;",
    "Prof. dr Tamara Premović, vanredni profesor, Fakultet za informacione tehnologije i inženjerstvo „Union Nikola Tesla“, Beograd, Srbija;",
    "Dr Marija Vešović, docent, Fakulteta za saobraćaj, komunikcije i logistiku Budva, Univerziteta Adriatik Bar, Crna Gora;",
    "Mr Novica Obradović, predsjednik SO Berane;",
  ];

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader title="Organizacioni odbor" body={body} />
      <Image>
        <h2>
          Naučni <span>odbor</span>
        </h2>
        {mainBody.map((line, index) => (
          <p key={index} style={{ textAlign: "left" }}>
            {line}
          </p>
        ))}
      </Image>
    </>
  );
};

export default Committees;
