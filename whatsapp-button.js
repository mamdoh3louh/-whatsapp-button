(() => {
  if ('undefined' != typeof window && 'undefined' != typeof HTMLElement) {
    let t = document.createElement('template');
    t.innerHTML = `<style>
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: 'Matter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://sleekflow.io/fonts/Matter-SemiBold.woff2) format('woff2'),
         url(https://sleekflow.io/fonts/Matter-SemiBold.woff) format('woff');
  }
  
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    font-display: optional;
    src: local('Helvetica');
  }
  
  /* CSS Reset for Shadow DOM - explicit overrides to prevent inheritance */
  :host {
    /* CSS Variables */
    --color-navyblue-900: hsl(230, 54%, 11%);
    --color-gray-700: hsl(240, 1%, 31%);
    --color-text-secondary: var(--color-gray-700);
    --color-whatsapp-green-light: hsl(142, 70%, 49%);
    --color-whatsapp-green-dark: hsl(173, 86%, 20%);
    
    /* Explicit positioning - use !important to override host page wildcards */
    display: block !important;
    position: fixed !important;
    bottom: 0 !important;
    right: 40px !important;
    z-index: 99999 !important;
    
    /* Reset inherited properties explicitly */
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial', sans-serif !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
    color: #000 !important;
    background: transparent !important;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    
    /* Prevent text transforms from host */
    text-transform: none !important;
    letter-spacing: normal !important;
    text-decoration: none !important;
  }
  
  :host([position="left"]) {
    left: 40px !important;
    right: unset !important;
  }
  
  @media screen and (max-width: 640px) {
    :host {
      right: 24px !important;
    }
    
    :host([position="left"]) {
      left: 24px !important;
      right: unset !important;
    }
  }

  /* Full CSS reset for all elements inside shadow DOM */
  *,
  *:before,
  *:after {
    box-sizing: border-box !important;
    font-family: inherit;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    text-decoration: none;
    text-transform: none;
    letter-spacing: normal;
  }

  .GTGjYAJSwZ {
    font-family: "Matter", "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
    font-weight: 600 !important;
  }

  .xxgPOaEFnL {
    display: flex;
    flex-direction: column;
    background: transparent;
  }

  .mPxOyQWLiW {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
  }

  :host([position="left"]) .mPxOyQWLiW {
    align-items: flex-start;
  }

  .qcsQciZWOY pre {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial', sans-serif !important;
    white-space: pre-wrap !important;
    background: white !important;
    color: var(--color-gray-700) !important;
    margin: 0 !important;
    font-size: 16px !important;
    font-weight: normal !important;
    padding: 0px !important;
  }

  .qnHmibkffk {
    width: 48px;
    height: 48px;
    border-radius: 500px;
  }

  .qcsQciZWOY {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial', sans-serif;
    margin-bottom: 16px !important;
    display: none;
    height: 453px !important;
    grid-template-rows: 81px minmax(0px, 1fr);
    overflow: hidden;
    border-radius: 24px !important;
    background-color: white !important;
    box-shadow: 0 24px 50px 10px rgba(0, 102, 255, 0.07);
    max-width: 498px;
    width: calc(100vw - 60px);
  }

  .qcsQciZWOY.open {
    display: grid;
  }

  .YCUfUDTVAB {
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--color-whatsapp-green-dark) !important;
  }

  .FbyiuNfkKZ {
    flex-direction: column;
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white !important;
    padding: 24px;
  }

  .lsbugARJeE {
    z-index: 10;
    display: flex;
    height: max-content;
    max-height: 100%;
    max-width: 80%;
    flex-direction: column;
    overflow: auto;
    border-radius: 16px;
    background-color: white !important;
    padding: 10px 18px;
  }

  .LMgAIpRhcf {
    z-index: 50;
    display: flex;
    width: 100%;
    background-color: white !important;
    padding: 20px 24px;
    flex-direction: column;
  }

  .EzZhMFlXPX:hover {
    opacity: 80%;
    transition: 0.3s;
  }

  .EzZhMFlXPX {
    cursor: pointer;
    justify-content: center;
    border-width: 0;
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
    align-self: end;
    border-radius: 500px !important;
    background-color: var(--color-whatsapp-green-light) !important;
  }

  .WwXgskZVZF {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dOErvAJCuL {
    color: white;
    font-size: 16px !important;
    padding-left: 8px;
    margin: 0;
  }

  .HcwtFszBYt:hover {
    opacity: 80%;
    transition: 0.3s;
  }

  .HcwtFszBYt {
    cursor: pointer;
    justify-content: center;
    border-width: 0;
    display: flex;
    width: auto;
    align-items: center;
    border-radius: 500px !important;
    background-color: var(--color-whatsapp-green-light) !important;
    height: auto;
  }

  :host([position="left"]) .HcwtFszBYt {
    align-self: flex-start;
  }

  :host([position="right"]) .HcwtFszBYt {
    align-self: flex-end;
  }

  .uYnOUDGlFm {
    padding: 9px;
  }

  .KLcixbtHKq {
    padding: 13px;
  }

  .CrsXVjtkXS {
    padding: 17px;
  }

  .CUgTIlaWyf {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .sJKAPGdCbP {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lJDlSVppNX {
    cursor: pointer;
  }

  .sbWpqHsvrY {
    margin-left: 8px;
  }

  .LKOSOXjUXN {
    color: white;
    font-size: 16px !important;
    margin-top: 0;
    margin-bottom: 0;
  }

  .hSIySVuWYW {
    color: hsl(209 77% 60%) !important;
    text-decoration: none;
  }

  .ZOdcEuDtYi {
    display: inline-block;
    position: relative;
    top: 2px;
  }

  .ZOdcEuDtYi svg {
    margin-right: 6px;
    margin-bottom: 1px;
  }

  .GrCLhZISVj {
    margin-top: 12px;
    margin-bottom: 0;
    text-align: center;
    font-size: 16px !important;
  }

  .xrghUqmEix {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial', sans-serif;
    align-self: stretch;
    width: 100%;
    min-width: 180px;
    background: transparent;
  }

  .FOBtRbQpeh {
    margin: 14px 0;
    text-align: right;
    padding-right: 12px;
    font-size: 14px;
    color: #888;
    background: transparent;
  }

  :host([position="left"]) .FOBtRbQpeh {
    text-align: left;
  }

  .WhJQZtxsXO {
    position: relative;
    display: inline-block;
    top: 1px;
  }

  .zdjEyzRHEt {
    color: hsl(209 77% 60%) !important;
    text-decoration: none;
  }

  #eHVIllZmHe {
    margin-inline-end: 0.25rem;
  }

  .gMOHbZQQec {
    margin-inline-end: 0.25rem;
  }

  .qJxsoHdWhm {
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .KugTbySzDu {
    display: flex;
    background-color: #dcf7c5 !important;
    margin-top: 16px;
    padding: 18px;
    border-radius: 16px;
    width: 80%;
    overflow: auto;
    max-height: 80px;
    font-size: 16px !important;
    font-weight: normal !important;
  }

  .lsbugARJeE::-webkit-scrollbar {
    width: 4px !important;
    border-radius: 20px !important;
  }

  .lsbugARJeE::-webkit-scrollbar-track {
    border-radius: 10px !important;
  }

  .lsbugARJeE::-webkit-scrollbar-thumb {
    background: #c8c8c8 !important;
    border-radius: 10px !important;
  }

  .KugTbySzDu::-webkit-scrollbar {
    width: 4px !important;
    border-radius: 20px !important;
  }

  .KugTbySzDu::-webkit-scrollbar-track {
    border-radius: 10px !important;
  }

  .KugTbySzDu::-webkit-scrollbar-thumb {
    background: #c8c8c8 !important;
    border-radius: 10px !important;
  }

  .NvaiwfoMfE {
    margin: 0;
    font-size: 14px !important;
    line-height: 18px !important;
    color: white !important;
  }

  .MXyzspdaGK {
    font-family: "Matter", "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
    font-size: 20px !important;
    font-weight: 600 !important;
    line-height: 25px !important;
    margin: 0 !important;
    color: white !important;
    padding-bottom: 0 !important;
  }

  .dgenobvkQw {
    font-family: "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
    font-size: 16px !important;
    font-weight: 700 !important;
    margin-bottom: 8px !important;
    margin-top: 0 !important;
    color: var(--color-navyblue-900) !important;
    min-height: 17px !important;
  }
</style>
  <div class="xxgPOaEFnL">
    <div class="qcsQciZWOY" id="wa-chat-window">
      <div class="YCUfUDTVAB">
        <div style="display:flex;width:100%">
          <img alt="logo" class="qnHmibkffk" id="wa-brand-image"/>
          <div style="padding-left:8px;display:flex;flex-direction:column;color:white">
            <p class="MXyzspdaGK" id="wa-brand-name-header"></p>
            <p class="NvaiwfoMfE" id="wa-brand-subtitle"></p>
          </div>
        </div>
        <div class="lJDlSVppNX" id="lJDlSVppNX">
          <svg viewBox="0 0 15 14" fill="#000" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="background-color:transparent;fill:white;color:white">
  <path d="m2.674.569.106.093 4.754 4.754L12.288.662a1.12 1.12 0 0 1 1.678 1.48l-.094.105L9.118 7l4.754 4.753a1.12 1.12 0 0 1-1.479 1.678l-.105-.093-4.754-4.754-4.754 4.754a1.12 1.12 0 0 1-1.678-1.479l.093-.105L5.95 7 1.195 2.247A1.12 1.12 0 0 1 2.675.569Z"></path>
</svg>
        </div>
      </div>
      <div class="FbyiuNfkKZ">
        <div class="lsbugARJeE">
          <p class="dgenobvkQw" id="dgenobvkQw"></p>
          <pre id="wa-welcome-message"></pre>
        </div>
        <div class="qJxsoHdWhm" id="wa-prefill-section" style="display:none">
          <div class="KugTbySzDu" id="wa-prefill-message"></div>
        </div>
        <img style="max-width:100%;top:0;left:0;position:absolute;object-fit:cover" alt="WhatsApp Background" src="https://sleekflow.io/static/images/wts-bg.jpg"/>
      </div>
      <div class="LMgAIpRhcf">
        <a rel="noopener noreferrer" target="_blank" style="text-decoration:none;width:100%" id="wa-whatsapp-link">
          <button class="EzZhMFlXPX">
            <div class="WwXgskZVZF">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
  <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED"></path>
  <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366"></path>
  <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE"></path>
</svg>
              <p class="dOErvAJCuL GTGjYAJSwZ" id="wa-call-to-action"></p>
            </div>
          </button>
        </a>
        
        <p class="GrCLhZISVj" data-nosnippet>
          <span>
            <span class="ZOdcEuDtYi">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.84653 0.0360377C6.13974 0.138097 6.33912 0.438354 6.33912 0.777828V4.66669L9.15651 4.66669C9.41915 4.66669 9.65997 4.82804 9.78125 5.08527C9.90254 5.34251 9.88415 5.65289 9.73354 5.89048L4.80311 13.6682C4.62681 13.9463 4.30753 14.066 4.01433 13.964C3.72113 13.8619 3.52174 13.5616 3.52174 13.2222L3.52174 9.33331H0.704349C0.441715 9.33331 0.200895 9.17196 0.0796083 8.91473C-0.0416787 8.65749 -0.0232851 8.34711 0.127325 8.10952L5.05775 0.331805C5.23405 0.0536972 5.55333 -0.0660216 5.84653 0.0360377Z" fill="#FFA800" />
</svg>
            </span>

          </span>
        </p>
        
      </div>
    </div>
    <div class="mPxOyQWLiW">
      <button class="HcwtFszBYt" id="HcwtFszBYt">
        <div class="sJKAPGdCbP">
          <div id="wa-button-icon">
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
  <path d="m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z" fill="#EDEDED"></path>
  <path d="m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z" fill="#25D366"></path>
  <path d="m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z" fill="#FEFEFE"></path>
</svg>
          </div>
          <p class="LKOSOXjUXN GTGjYAJSwZ" id="wa-button-label"></p>
        </div>
      </button>
      
      <div class="xrghUqmEix" data-nosnippet>
        <p class="FOBtRbQpeh">
          <span class="WhJQZtxsXO">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.84653 0.0360377C6.13974 0.138097 6.33912 0.438354 6.33912 0.777828V4.66669L9.15651 4.66669C9.41915 4.66669 9.65997 4.82804 9.78125 5.08527C9.90254 5.34251 9.88415 5.65289 9.73354 5.89048L4.80311 13.6682C4.62681 13.9463 4.30753 14.066 4.01433 13.964C3.72113 13.8619 3.52174 13.5616 3.52174 13.2222L3.52174 9.33331H0.704349C0.441715 9.33331 0.200895 9.17196 0.0796083 8.91473C-0.0416787 8.65749 -0.0232851 8.34711 0.127325 8.10952L5.05775 0.331805C5.23405 0.0536972 5.55333 -0.0660216 5.84653 0.0360377Z" fill="#FFA800" />
</svg>
          </span>
         </p>
      </div>
      
    </div>
  </div>
`;
    class e extends HTMLElement {
      constructor() {
        super(),
          (this.isOpen = !1),
          (this._boundToggle = this.toggle.bind(this)),
          (this._boundClose = this.close.bind(this)),
          this.attachShadow({ mode: 'open' }).appendChild(
            t.content.cloneNode(!0),
          );
      }
      static get observedAttributes() {
        return [
          'brand-name',
          'button-name',
          'brand-subtitle',
          'welcome-message',
          'phone-number',
          'brand-image-url',
          'call-to-action',
          'button-size',
          'button-icon-size',
          'prefill-message',
          'position',
          'powered-by-color',
        ];
      }
      connectedCallback() {
        (this.chatWindow = this.shadowRoot.querySelector('#wa-chat-window')),
          (this.ctaButton = this.shadowRoot.querySelector('#HcwtFszBYt')),
          (this.closeBtn = this.shadowRoot.querySelector('#lJDlSVppNX')),
          (this.whatsappLink =
            this.shadowRoot.querySelector('#wa-whatsapp-link')),
          (this.buttonLabel =
            this.shadowRoot.querySelector('#wa-button-label')),
          (this.buttonIconContainer =
            this.shadowRoot.querySelector('#wa-button-icon')),
          (this.brandImage = this.shadowRoot.querySelector('#wa-brand-image')),
          (this.brandNameHeader = this.shadowRoot.querySelector(
            '#wa-brand-name-header',
          )),
          (this.brandSubtitle =
            this.shadowRoot.querySelector('#wa-brand-subtitle')),
          (this.chatTitle = this.shadowRoot.querySelector('#dgenobvkQw')),
          (this.welcomeMessageText = this.shadowRoot.querySelector(
            '#wa-welcome-message',
          )),
          (this.prefillSection = this.shadowRoot.querySelector(
            '#wa-prefill-section',
          )),
          (this.prefillMessageText = this.shadowRoot.querySelector(
            '#wa-prefill-message',
          )),
          (this.callToAction =
            this.shadowRoot.querySelector('#wa-call-to-action')),
          (this.poweredByText = this.shadowRoot.querySelector(
            '#eHVIllZmHe',
          )),
          this.ctaButton.addEventListener('click', this._boundToggle),
          this.closeBtn.addEventListener('click', this._boundClose),
          this.updateContent();
      }
      disconnectedCallback() {
        this.ctaButton &&
          this.ctaButton.removeEventListener('click', this._boundToggle),
          this.closeBtn &&
            this.closeBtn.removeEventListener('click', this._boundClose);
      }
      attributeChangedCallback(t, e, o) {
        e !== o && this.shadowRoot && this.updateContent();
      }
      updateContent() {
        var t, e, o, a, i, n, r, s, l, p, d;
        this.shadowRoot &&
          ((d = this.getAttribute('brand-name') || ''),
          (t = this.getAttribute('button-name') || ''),
          (e = this.getAttribute('brand-subtitle') || ''),
          (o = this.getAttribute('welcome-message') || ''),
          (a = this.getAttribute('phone-number') || ''),
          (p = this.getAttribute('brand-image-url') || ''),
          (i = this.getAttribute('call-to-action') || ''),
          (n = this.getAttribute('button-size') || 'large'),
          (r = this.getAttribute('button-icon-size') || '22'),
          (s = this.getAttribute('prefill-message') || ''),
          this.getAttribute('position'),
          (l = this.getAttribute('powered-by-color') || ''),
          this.brandImage &&
            (p
              ? ((this.brandImage.src = p),
                (this.brandImage.style.display = ''))
              : (this.brandImage.style.display = 'none')),
          this.brandNameHeader && (this.brandNameHeader.textContent = d),
          this.chatTitle && (this.chatTitle.textContent = d),
          this.brandSubtitle && (this.brandSubtitle.textContent = e),
          this.welcomeMessageText && (this.welcomeMessageText.textContent = o),
          this.callToAction && (this.callToAction.textContent = i),
          this.buttonLabel &&
            ((this.buttonLabel.textContent = t)
              ? this.buttonLabel.classList.add('sbWpqHsvrY')
              : this.buttonLabel.classList.remove(
                  'sbWpqHsvrY',
                )),
          this.ctaButton &&
            (this.ctaButton.classList.remove(
              'uYnOUDGlFm',
              'KLcixbtHKq',
              'CrsXVjtkXS',
              'CUgTIlaWyf',
            ),
            this.ctaButton.classList.add(
              {
                regular: 'uYnOUDGlFm',
                medium: 'KLcixbtHKq',
                large: 'CrsXVjtkXS',
                small: 'uYnOUDGlFm',
              }[n] || 'CrsXVjtkXS',
            ),
            t) &&
            this.ctaButton.classList.add('CUgTIlaWyf'),
          this.buttonIconContainer &&
            ((this.buttonIconContainer.style.width = r + 'px'),
            (this.buttonIconContainer.style.height = r + 'px'),
            (p = this.buttonIconContainer.querySelector('svg'))) &&
            (p.setAttribute('width', r), p.setAttribute('height', r)),
          this.prefillSection &&
            this.prefillMessageText &&
            (s
              ? ((this.prefillSection.style.display = ''),
                (this.prefillMessageText.textContent = s))
              : (this.prefillSection.style.display = 'none')),
          this.whatsappLink &&
            ((d = encodeURIComponent(s || o).replace(/%0A/g, '%0a')),
            (this.whatsappLink.href =
              'https://api.whatsapp.com/send?phone=' + a + '&text=' + d)),
          this.poweredByText) &&
          (l
            ? ((this.poweredByText.style.color = l),
              (this.poweredByText.style.opacity = '1'))
            : ((this.poweredByText.style.color = ''),
              (this.poweredByText.style.opacity = '')));
      }
      toggle() {
        (this.isOpen = !this.isOpen), this.isOpen ? this.open() : this.close();
      }
      open() {
        (this.isOpen = !0),
          this.chatWindow && this.chatWindow.classList.add('open'),
          this.dispatchEvent(
            new CustomEvent('widget-opened', { bubbles: !0, composed: !0 }),
          );
      }
      close() {
        (this.isOpen = !1),
          this.chatWindow && this.chatWindow.classList.remove('open'),
          this.dispatchEvent(
            new CustomEvent('widget-closed', { bubbles: !0, composed: !0 }),
          );
      }
      show() {
        this.style.display = '';
      }
      hide() {
        this.style.display = 'none';
      }
    }
    customElements.get('sleekflow-whatsapp-widget') ||
      customElements.define('sleekflow-whatsapp-widget', e),
      (window.whatsappButton = function (e) {
        function o() {
          var t;
          document.body
            ? ((t = document.querySelector('sleekflow-whatsapp-widget')) &&
                t.remove(),
              (t = document.createElement('sleekflow-whatsapp-widget')),
              e.brandName && t.setAttribute('brand-name', e.brandName),
              e.buttonName && t.setAttribute('button-name', e.buttonName),
              e.brandSubtitleText &&
                t.setAttribute('brand-subtitle', e.brandSubtitleText),
              e.welcomeMessage &&
                t.setAttribute('welcome-message', e.welcomeMessage),
              e.phoneNumber && t.setAttribute('phone-number', e.phoneNumber),
              e.brandImageUrl &&
                t.setAttribute('brand-image-url', e.brandImageUrl),
              e.callToAction &&
                t.setAttribute('call-to-action', e.callToAction),
              e.buttonSize && t.setAttribute('button-size', e.buttonSize),
              e.buttonIconSize &&
                t.setAttribute('button-icon-size', e.buttonIconSize),
              e.prefillMessage &&
                t.setAttribute('prefill-message', e.prefillMessage),
              e.buttonPosition && t.setAttribute('position', e.buttonPosition),
              e.poweredByColor &&
                t.setAttribute('powered-by-color', e.poweredByColor),
              document.body.appendChild(t))
            : document.addEventListener('DOMContentLoaded', o);
        }
        o();
      });
  }
})();