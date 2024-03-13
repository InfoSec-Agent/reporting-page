// import { updateLanguage } from "../../wailsjs/go/main/App";

function changeLanguage() {
  var language = document.getElementById("language-picker-select").value;
  console.log("Language changed to " + language);

  switch(language) {
    case "de":
      // updateLanguage(0);
      break;
    case "en-GB":
      // updateLanguage(1);
      break;
    default:
      // updateLanguage(1);
  }

}

function openSettingsPage() {
    document.getElementById("page-contents").innerHTML = `
    <div class="setting" id="dark-mode">
      <span class="setting-description">Dark mode</span>
      <label class="switch">
        <input type="checkbox" id="dark-mode-switch">
        <span class="slider round"></span>
      </label>
    </div>
    <hr class="solid">
    <div class="setting" class="language-picker language-picker--flags js-language-picker" data-trigger-class="li4-btn li4-btn--subtle js-tab-focus">
        <form action="" class="language-picker__form">
          <label for="language-picker-select">Select your language</label>
      
          <select name="language-picker-select" id="language-picker-select">
            <option lang="de" value="de">Deutsch</option>
            <option lang="en" value="en-GB">English (GB)</option>
          </select>
          
        </form>
      </div>
    `;

    document.getElementById("language-picker-select").addEventListener("change", () => changeLanguage());
}

document.getElementById("settings-button").addEventListener("click", () => openSettingsPage());