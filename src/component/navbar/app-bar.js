class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
           :host {
               position: fixed;
               width: 100%;
               display:flex;
               color:white;
           }
           h2 {
            padding: 16px;
            color: #FF8C00;
           }

           .navbar-custom {
            background-color: black;                  
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px;
            justify-content: space-around;
           
          }
          .search-container > input {
              width: 400px;
              padding: 8px;
              border: none;
              border-radius: 5px;
          }
          .search-container > input:focus {
              outline: 0;
              text-align: left;
          }
          .search-container > input:focus::placeholder {
              font-weight: bold;
          }
          .search-container > button {
              cursor: pointer;
              margin-left: auto;
              padding: 10px;
              background-color: #FF8C00;
              color: white;
              border: 0;
              border-radius: 5px;
              text-transform: uppercase;
          }
          .search-container > button:focus {
              outline: 0;
          }
          .search-container > button:hover {
              background-color: #ffbe0f;
          }    
          @media screen and (max-width: 550px) {
              * {
                  margin: 0;
                  padding: 0;
              }
              .navbar-custom {
                  margin: 0;
                  width: 100%;
              }
              .search-container{
                  width: 80%;
                  display: flex;
              }
              .search-container > input {
                width: 210px; 
              }

              .navbar-custom h2{
                  font-size: 18px;
                  width: 30%
              }       
          }     
       </style>
       <div class="navbar-custom">
          <div>
              <h2>The MovieDB</h2>
          </div>
            <div id="search-container" class="search-container">
              <input placeholder="Search a Movie" id="searchElement" type="search">
              <button id="searchButtonElement" type="submit">Search</button>
          </div>
       </div>
       `;
        this.shadowDOM
            .querySelector("#searchButtonElement")
            .addEventListener("click", this._clickEvent);
    }
}

customElements.define("app-bar", AppBar);