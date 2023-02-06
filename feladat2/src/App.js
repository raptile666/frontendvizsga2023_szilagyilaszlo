import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container-fluid">

      <h1>Az antikvárium története</h1>

      <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.</p>

      <p>A jelenlegi épület 2019-ben lett felújítva.</p>

      <h2>Hírességek, akik itt jártak</h2>

      <div className="container row ">
        <section className="card col-xs-12 col-md-4 m-2 p-4">
          <h3>Ady Endre</h3>

          <p>Többször is kikölcsönözte Deák Ferenc műveit</p>

          <a href="https://hu.wikipedia.org/wiki/Ady_Endre">Wikipédia</a>
        </section>

        <section className="card col-xs-12 col-md-3 m-2 p-4">
          <h3>Móra Ferenc</h3>

          <p>Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>

          <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipédia</a>
        </section>

        <section className="card col-xs-12 col-md-4 m-2 p-4">
          <h3>Névtelen adományozó</h3>

          <p>1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>

          <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipédia</a>
        </section>
      </div>

      <form action="" method="post" className="p-2" >
        <h2>Új híresség jelzése</h2>

        <label for="wiki_link" className="form-label" >Wikipédia link</label>
        <input type="url" name="new_person" id="wiki_link" className="form-control" />

        <label for="description" className="form-label" >Leírás</label>
        <textarea name="new_person" id="description" className="form-control" />

        <input type="submit" value="Elküld" className="btn btn-dark mt-2" />
      </form>

    </div>
  );
}

export default App;
