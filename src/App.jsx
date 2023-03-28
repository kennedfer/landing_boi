import { Section } from "./components/Section";
import { Galery } from "./components/Galery";
import { Texts } from "./utils/index.js";
import style from "./styles/style.module.css";

function App() {
  return (
    <>
      <main>
        <Section background={1}>
          <h2 className={style.greeting}>{Texts.greeting}</h2>
        </Section>

        <Section background={2}>
          <h2>Sobre Nós</h2>
          <pre className={style["long-text"]}>{Texts.about}</pre>
        </Section>

        <Section background={3}>
          <h2>Nosso Objetivo</h2>
          <pre className={style["long-text"]}>{Texts.objective}</pre>
        </Section>

        <div>
          <Galery />
        </div>

        <Section background={4}>
          <div className={style["support-container"]}>
            <div>
              <h2>Apoie</h2>
              <pre>{Texts.support}</pre>
              <pre>{Texts.contacts}</pre>
            </div>
            <div className={style["qrcode-container"]}>
              <img
                className={style.qrcode}
                src="/images/qrcode/pix.png"
                alt="qrcode do pix"
              />
              <div>Pix: Eliana de Jesus Ferreira</div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
