
import './css/App.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import Link from './components/Link';
import ContentBox from './components/ContentBox';
import FancyTitle from './components/FancyTitle';
import SmoothScroll from 'smooth-scroll';

function App() {
  new SmoothScroll('a[href*="#"]', {
    speed: 300
  });

  return (
    <div className="app">
      <Header />
      <Navigation />
      <section className='app-content-section'>
        <ContentBox name="nav-where" >
          <FancyTitle>8. 10. v <Link href="https://www.boutiquehotelcorso.cz/" title="Hotel">Hotelu Corso</Link></FancyTitle>
          <p>Obřad i oslavu si užijem přímo tady <Link href="https://goo.gl/maps/YyZu5zetd262" title="Mapa">nám. Krále Jiřího z Poděbrad 2</Link>. S tvým příjezdem počítáme někdy od 13:00.</p>
          <h3>14:00 obřad venku</h3>
          <p>
            Začátkem října bývá kolem 13/14 °C. Ale neboj. Do tepla hotelu to budeš mít doslova dva kroky.
          </p>
          <ul>
            <li>Rýže se musí uklízet a na bublifuk tam není prostor. Ťuknem si radši bublinama v přípitku.</li>
            <li>Po obřadu všechny poprosíme o hromadné foto. Snad z nás nebudou akvabely. =)</li>
          </ul>
          <p>
            Mobil prosím při obřadu <strong>schovej</strong>. Opravdu. Viděli jsme to mockrát – zavazí to ostatním, záznam stojí za starou belu a přicházíš u toho o zážitek. Radši si nás odnes v srdci než na kartě.
          </p>
          <h3>… a pak párty uvnitř</h3>
          <p>Členité prostory. Volná zábava. Bar a bohatý raut. Bez tabule, bez zasedacího pořádku.</p>
          <p>Mimochodem, na místě je piano. My na něj neumíme. Ty možná jo?</p>
        </ContentBox>
        <ContentBox name="nav-kids">
          <FancyTitle>Děti</FancyTitle>
          <p>I píďata si najdou svý. Plánujeme koutek pro nejmenší, a když udeří nuda, zachrání to zdejší <Link href="https://www.nasemestecko.cz/" title="Dětský koutek">Městečko</Link> – herní prostor s kavárnou, kde po předchozí domluvě umí i profi hlídání (<Link href="https://www.nasemestecko.cz/hlidani-deti-revnice/" title="Kontakt">napiš jim</Link>).</p>
        </ContentBox>
        <ContentBox name="nav-traditions">
          <FancyTitle>Zvyky</FancyTitle>
          <p>Tradic plánujeme poskrovnu. Spíš si s tebou užijem některou z volných aktivit, co připravujem. Máš taky nápad? Ozvi se. A jestli to má být překvapení, napiš Alence a Terezce. Ví, co a jak.</p>
          <p>Joa… unášení nevěsty nebude. Jana je z Ondry unešená dost.</p>
        </ContentBox>
        <ContentBox name="nav-dress-code">
          <FancyTitle>Dress Code</FancyTitle>
          <p>Něco pohodlného, v čem se budeš cítit krásně a svátečně. Nic víc neřeš a deštník nebal. Půjčíme ti kdyžtak průhledný, ať hezky vidíš na to drama u oltáře. =)</p>
        </ContentBox>
        <ContentBox name="nav-transport">
          <FancyTitle>Doprava a ubytko</FancyTitle>
          {/* Mapka */}
          <ul>
            <li>O víkendu se tu dobře parkuje, zóny tu nejsou.</li>
            <li>Vlak do Řevnic jede z Hlaváku. Doporučujeme ten v 12:21.</li>
            <li>Poslední vlak do Prahy jede v 23:34. Taxi je možnost. Nebo si bookni <Link href="https://www.hotelgrandrevnice.cz/ubytovani/" title="Ubytování">ubytko v Grandu</Link>.</li>
          </ul>
          <p>
            Na spaní v Corso a pivovaru jsme se domlouvili s vytipovanými svatebčany – Corso pokojů je totiž malinko a pivovar leda pro Snorlaxe.
          </p>
        </ContentBox>
        <ContentBox name="nav-jukebox">
          <FancyTitle>Zapoj se do Jukeboxu!</FancyTitle>
          <p>Postavme spolu mix, kterej se všem jak mentolovej delight rozpustí na rautem přesyceným jazyku. Znáš songy, co rozezní srdce a rozhejbou kolena? <Link href="https://open.spotify.com/playlist/3J6OwjYfuYeDeSAu24D6eZ?si=cc1d544763dc4064&pt=bd03725ea8bf16960d0b4e76086f297e" title="Spotify">Přihoď je do našeho After Eight playlistu na Spotify</Link>. Namixujem z nich pak večerní zábavu po osmé.</p>
        </ContentBox>
        <ContentBox name="nav-gifts">
          <FancyTitle>Dary</FancyTitle>
          <p>Největší dárek je pro nás, že dorazíš a užiješ si to s náma. Připravit to stojí spoustu námahy, a tak je pro nás živá párty ta pravá odměna. Pokud ti bude připadat jó dobrá, můžeš nám na místě přispět do prasátka (nebo přes QR kód).</p>
        </ContentBox>
      </section>
      {/* <section className='app-comment-section' id='app-comment-section'>
        <ContentBox name='nav-comments'>
        <h2>Vzkazy</h2>
        <p>Tak co ty na to? Máš otázky? Napiš nám…</p>
        </ContentBox>
      </section> */}
      <footer className='app-footer'>
        
      </footer>
    </div>
  );
}

export default App;
