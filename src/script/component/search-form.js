// mendefinisikan custom element harus pakai dash (ex: card-1, app-bar) agar membedakan dari element HTML
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Searchform extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    body{
      background-color: #1f1f1f;
    }
    .container {
      background-color: #1f1f1f;
      color: white;
      text-align: center;
    }
    #movie-list{
      margin-bottom:116px;
      align-items-stretch;
    }
  </style>



  <div class="container">
    <div class="row mt-3 justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">Search Movie</h1>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Movie Title..." id="search-input" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary text-light" type="button" id="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div class="row align-items-stretch" id="movie-list"></div>
  </div>
    `;
  }
}

customElements.define('search-form', Searchform);
