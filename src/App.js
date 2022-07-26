
import './css/App.css';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <section className='app-content-section'>
        <h2>8. 10. v <a href="https://www.boutiquehotelcorso.cz/" target="_blank" title="Hotel">Hotelu Corso</a></h2>
        <p>Obřad i oslavu si užijem přímo tady <a href="https://goo.gl/maps/YyZu5zetd262" target="_blank" title="Mapa">nám. Krále Jiřího z Poděbrad 2</a>. S tvým příjezdem počítáme někdy od 13:00.</p>
        <h3>14:00 obřad venku</h3>
        <p>
          Začátkem října bývá kolem 13/14 °C. Ale neboj. Do tepla hotelu to budeš mít doslova dva kroky.
          <ul>
            <li>Rýže se musí uklízet a na bublifuk tam není prostor. Ťuknem si radši bublinama v přípitku.</li>
            <li>Po obřadu všechny poprosíme o hromadné foto. Snad z nás nebudou akvabely. =)</li>
          </ul>
          Mobil prosím při obřadu <strong>schovej</strong>. Opravdu. Viděli jsme to mockrát – zavazí to ostatním, záznam stojí za starou belu a přicházíš u toho o zážitek. Radši si nás odnes v srdci než na kartě.
        </p>
        <h3>… a pak párty uvnitř</h3>
        <p>Členité prostory. Volná zábava. Bar a bohatý raut. Bez tabule, bez zasedacího pořádku.</p>
        <p>Mimochodem, na místě je piano. My na něj neumíme. Ty možná jo?</p>
        <h2>Děti</h2>
        <p>I píďata si najdou svý. Plánujeme koutek pro nejmenší, a když udeří nuda, zachrání to zdejší <a href="https://www.nasemestecko.cz/" target="_blank" title="Dětský koutek">Městečko</a> – herní prostor s kavárnou, kde po předchozí domluvě umí i profi hlídání (<a href="https://www.nasemestecko.cz/hlidani-deti-revnice/" title="Kontakt">napiš jim</a>).</p>
        <h3>Zvyky</h3>
        <p>Tradic plánujeme poskrovnu. Spíš si s tebou užijem některou z volných aktivit, co připravujem. Máš taky nápad? Ozvi se. A jestli to má být překvapení, napiš Alence a Terezce. Ví, co a jak.</p>
        <p>Joa… unášení nevěsty nebude. Jana je z Ondry unešená dost.</p>
        <h3>Dress Code</h3>
        <p>Něco pohodlného, v čem se budeš cítit krásně a svátečně. Nic víc neřeš a deštník nebal. Půjčíme ti kdyžtak průhledný, ať hezky vidíš na to drama u oltáře. =)</p>
        <h3>Doprava a ubytko</h3>
        {/* Mapka */}
        <p>
          <ul>
            <li>O víkendu se tu dobře parkuje, zóny tu nejsou.</li>
            <li>Vlak do Řevnic jede z Hlaváku. Doporučujeme ten v 12:21.</li>
            <li>Poslední vlak do Prahy jede v 23:34. Taxi je možnost. Nebo si bookni <a href="https://www.hotelgrandrevnice.cz/ubytovani/" target="_blank" title="Ubytování">ubytko v Grandu</a>.</li>
          </ul>
          Na spaní v Corso a pivovaru jsme se domlouvili s vytipovanými svatebčany – Corso pokojů je totiž malinko a pivovar leda pro Snorlaxe.
        </p>
        <h3>Zapoj se do Jukeboxu!</h3>
        <p>Postavme spolu mix, kterej se všem jak mentolovej delight rozpustí na rautem přesyceným jazyku. Znáš songy, co rozezní srdce a rozhejbou kolena? <a href="https://open.spotify.com/playlist/3J6OwjYfuYeDeSAu24D6eZ?si=cc1d544763dc4064&pt=bd03725ea8bf16960d0b4e76086f297e" target="_blank" title="Spotify">Přihoď je do našeho After Eight playlistu na Spotify</a>. Namixujem z nich pak večerní zábavu po osmé.</p>
        <h3>Dary</h3>
        <p>Největší dárek je pro nás, že dorazíš a užiješ si to s náma. Připravit to stojí spoustu námahy, a tak je pro nás živá párty ta pravá odměna. Pokud ti bude připadat jó dobrá, můžeš nám na místě přispět do prasátka (nebo přes QR kód).</p>
      </section>
      <section className='app-comment-section' id='app-comment-section'>
        <h3>Vzkazy</h3>
        <p>Tak co ty na to? Máš otázky? Napiš nám…</p>
      </section>
      <footer className='app-footer'>
        Foot
      </footer>
    </div>
  );
}

export default App;
