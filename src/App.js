
import "./css/App.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import Link from "./components/Link";
import ContentBox from "./components/ContentBox";
import FancyTitle from "./components/FancyTitle";
import FancyImage from "./components/FancyImage";
import SmoothScroll from "smooth-scroll";
import ListItem from "./components/ListItem";

function App() {
  new SmoothScroll("a[href*='#']", {
    speed: 300
  });

  return (
    <div className="app">
      <Header />
      <Navigation />
      <ContentBox name="nav-where" >
        <h1>8.&nbsp;10.&nbsp;2022<br /><Link href="https://www.boutiquehotelcorso.cz/" title="Hotel">Hotel Corso v Řevnicích</Link></h1>
        <FancyTitle>Program</FancyTitle>
        <h3 className="header-left">13:00 Příjezd hostů</h3>
        <ListItem>Parkuje se na pohodu a bez zón, <Link href="" title="">mrkni na mapku</Link>.</ListItem>
        <ListItem>Vlak z Hlaváku jede v 12:21. S lítačkou za 22, bez ní za 53&nbsp;Kč.</ListItem>
        <h3 className="header-right">14:00 Obřad před hotelem</h3>
        <ListItem>V říjnu tu bývá 14 °C. Do tepla hotelu to jsou naštěstí dva kroky.</ListItem>
        <ListItem><strong>Dress code?</strong> Něco pohodlného, v čem se cítíš krásně a svátečně. Deštníky máme, půjčíme ti bílý. ;)</ListItem>
        <ListItem><strong>Při obřadu prosím nefoť.</strong> Radši si nás odnes v srdci než na kartě.</ListItem>
        <h3 className="header-left">A pak...</h3>
        <ListItem>Slzičky, přípitek i hromadné foto.</ListItem>
        <ListItem><strong>Párty!</strong> Členité prostory. Volná zábava. Bar a boahtý raut.</ListItem>
        <ListItem><strong>Bez tradic.</strong> Nevěsta je z ženicha unešená už dávno a centrem pozornosti nejsou rádi ani jeden.</ListItem>
        {/* img1 Návrh na servírování */}
        {/* img2 Přidat lidi a zamíchat */}
      </ContentBox>
      <ContentBox name="nav-jukebox">
        <FancyTitle>Zapoj se</FancyTitle>
        <h3 className="header-right">Znáš songy, co rozezní srdce a rozhejbou kolena?</h3>
        <ListItem><Link href="https://open.spotify.com/playlist/3J6OwjYfuYeDeSAu24D6eZ?si=cc1d544763dc4064&pt=bd03725ea8bf16960d0b4e76086f297e" title="Spotify">Přihoď je do našeho After Eight jukeboxu na Spotify.</Link></ListItem>
        <div className="content-side">
          <FancyImage src="Spotify_Logo_ratioed.png" alt="Spotify" dir="se" />
          <p>Postavme spolu mix, kterej se všem jak mentolovej delight rozpustí na rautem přesyceným jazyku.</p>
        </div>
        <h3 className="header-left">Máš nápad na aktivitu nebo překvápko?</h3>
        <ListItem>Napiš <Link href="" title="Svědkyně">Alence</Link> nebo <Link href="" title="Sestra">Terezce</Link>. Ví nejlíp, co a jak.</ListItem>
        <ListItem>Mimochodem, na místě je piano. My na něj neumíme. &#129335; Ty jo?</ListItem>
      </ContentBox>
      <ContentBox name="nav-room">
        <FancyTitle>Ubytko</FancyTitle>
        <h3 className="header-right">Záleží, jestli...</h3>
        <ListItem><strong>Spíš v Corsu:</strong> recepce tě ubytuje.</ListItem>
        <ListItem><strong>Spíš v Pivovaru:</strong> klíč bude v Corsu.</ListItem>
        <ListItem>Spát chceš, ale <strong>nemáš kde:</strong> využij prosím <Link href="https://www.hotelgrandrevnice.cz/" title="Hotel Grand">hotel Grand</Link> a napiš nám, jestli chceš snídat v Corsu.</ListItem>
        <ListItem><strong>Nevíš, kde spíš:</strong> napiš <Link href="" title="Nevěsta">Janě</Link>.</ListItem>
        <ListItem><strong>Spát nebudeš:</strong> Poslední vlak jede v 23:34. Cena za taxi dává smysl od 3 lidí. Můžeme ti poslat 150&nbsp;Kč slevu na první jízdu s Liftago.</ListItem>
      </ContentBox>
      <ContentBox name="nav-sunday">
        <FancyTitle>Neděle</FancyTitle>
        <h3 className="header-left">Cyklistický a turistický ráj</h3>
        <p>Když už jsi tu... třeba tvá alkoholem zmožená hlava v neděli ocení trochu brdského kyslíku. Dá-li počásko, nabízí se:</p>
        <div className="content-side">
          <ListItem><Link href="https://mapy.cz/s/logehakoge" title="Výlet">Fabiánova naučná stezka</Link> vhodná i pro kočárky.</ListItem>
          <FancyImage src="trail2.jpeg" alt="Cesta" dir="sw" title="Moc se nezadejchat" />
        </div>
        <div className="content-side">
          <FancyImage src="trail.jpeg" alt="Cesta" dir="se" title="Pro dobrej pocit" />
          <ListItem><Link href="https://mapy.cz/s/radabojudo" title="Výlet">Procházka s výhledem</Link>, co končí na vláčku z Dobřichovic.</ListItem>
        </div>
        <div className="content-side">
          <ListItem><Link href="https://mapy.cz/s/nakolalume" title="Výlet">Výšlap přes vodopádky a rozhlednu</Link> až k trati do Všenor.</ListItem>
          <FancyImage src="tower.jpeg" alt="Cesta" dir="sw" title="Jako na obláčku" />
        </div>
      </ContentBox>
      <footer className="app-footer wide">
        <p>Největší dárek pro nás je, že dorazíš a užiješ si to s náma. Tak dary neřeš. Radši přines vtipný přáníčko, nebo hoď kilčo do prasátka na místě. &#129293;</p>
      </footer>
    </div>
  );
}

export default App;
