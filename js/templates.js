import {html, render} from 'https://unpkg.com/lit-html?module';
import {getEntity, syncEntity} from './lytek.js';
import {character} from './lytek/values.js';

export let entityTemplate = entity => 
    html`
        ${console.log(entity)}
        <div class="sheetmodule charmeta">
            <h3>Basic Information</h3>
            <ul>
                <li><label for="namefield">Name</label><input value="Rajmael" id="namefield"></li>
                <li><label for="playerfield">Player</label><input value="Arian" id="playerfield"></li>
                <li><label for="conceptfield">Concept</label><input value="Sorcerer, Teacher, King" id="conceptfield"></li>
                <li><label for="animafield">Anima</label><input value="Don't remember atm" id="animafield"></li>
                <li>
                    <label for="casteselector">Caste</label>
                    <select id="casteselector">
                        <option value="dawn">Dawn</option>
                        <option value="eclipse">Eclipse</option>
                        <option value="night">Night</option>
                        <option value="zenith">Zenith</option>
                        <option selected="selected" value="twilight">Twilight</option>
                    </select>
                </li>
                <li>
                    <label for="supernalselector">Supernal</label>
                    <select id="supernalselector">
                        <option value="athletics">Athletics</option>
                        <option value="awareness">Awareness</option>
                        <option value="brawl">Brawl</option>
                        <option value="bureaucracy">Bureaucracy</option>
                        <option value="dodge">Dodge</option>
                        <option value="integrity">Integrity</option>
                        <option value="linguistics">Linguistics</option>
                        <option value="lore" selected>Lore</option>
                        <option value="medicine">Medicine</option>
                        <option value="occult">Occult</option>
                    </select>
                </li>
            </ul>
        </div>
        ${attributeSection(entity)}
        <div class="sheetmodule abilities">
            <h3>Abilities</h3>
            <ul>
                <li><input type="checkbox"><label>Archery       </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Athletics    </label><span class="dots" value="3"><span class="text">3</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Awareness    </label><span class="dots" value="4"><span class="text">4</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Brawl        </label><span class="dots" value="1"><span class="text">1</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Bureaucracy  </label><span class="dots" value="2"><span class="text">2</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox"><label>Craft         </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Dodge        </label><span class="dots" value="3"><span class="text">3</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Integrity    </label><span class="dots" value="2"><span class="text">2</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Investigation</label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Larceny      </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Linguistics  </label><span class="dots" value="2"><span class="text">2</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Lore         </label><span class="dots" value="5"><span class="text">5</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Medicine     </label><span class="dots" value="4"><span class="text">4</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Melee        </label><span class="dots" value="1"><span class="text">1</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" checked><label>Occult       </label><span class="dots" value="4"><span class="text">4</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Performance  </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Presence     </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Resistance   </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Ride         </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Sail         </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Socialize    </label><span class="dots" value="3"><span class="text">3</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Stealth      </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Survival     </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>Thrown       </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><input type="checkbox" ><label>War          </label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
            </ul>
        </div>
        <div class="sheetmodule willpower">
            <h3>Willpower</h3>
            <ul>
                <li><label>Max</label> <span class="dots" value="3"><span class="text">3</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button><button class="6">6</button><button class="7">7</button><button class="8">8</button><button class="9">9</button><button class="10">10</button></span></li>
                <li><label>Temporary</label> <span class="dots" value="3"><span class="text">3</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button><button class="6">6</button><button class="7">7</button><button class="8">8</button><button class="9">9</button><button class="10">10</button></span></li>
            </ul>
        </div>
        <div class="sheetmodule limit">
            <h3>Limit</h3>
            <ul>
                <li><label>Break</label> <span class="dots" value="3"><span class="text">3</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button><button class="6">6</button><button class="7">7</button><button class="8">8</button><button class="9">9</button><button class="10">10</button></span></li>
                <li><label>Trigger</label><textarea cols="30" rows="5"></textarea></li>
            </ul>
        </div>
        <div class="sheetmodule experience">
            <h3>Experience</h3>
            <ul>
                <li><label>Current</label> <input type="number" value="14"></li>
                <li><label>Total</label> <input type="number" value="14"></li>
                <li><label>Solar XP Current</label> <input type="number" value="14"></li>
                <li><label>Solar XP Total</label> <input type="number" value="14"></li>
            </ul>
        </div>
        <div class="sheetmodule essence">
            <h3>Essence</h3>
            <ul>
                <li><label>Rating</label><span class="dots" value="0"><span class="text">0</span><button class="0">0</button><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li><label>Personal</label><input type="number" value="13"><input type="number" value="13"></li>
                <li><label>Peripheral</label><input type="number" value="18"><input type="number" value="33"></li>
                <li><label>Comitted</label><input type="number" value="0"></li>
            </ul>
        </div>
        <div class="sheetmodule specialties editablelist">
            <h3>Specialties</h3>
            <ul class="buttonbar">
                <li><button>Add</button></li>
                <li><button>Remove</button></li>
                <li><button>Edit</button></li>
            </ul>
            <ul class="items">
                <li value="0"><input type="checkbox"><label class="ability">Lore</label>Tutoring </li>
                <li value="1"><input type="checkbox"><label class="ability">Linguistics</label>Writings</li>
                <li value="2"><input type="checkbox"><label class="ability">Martial Arts</label>Parry</li>
                <li value="3"><input type="checkbox"><label class="ability">Awareness</label>The Opportune Moment</li>
            </ul>
        </div>
        <div class="sheetmodule merits editablelist">
            <h3>Merits</h3>
            <ul class="buttonbar">
                <li><button>Add</button></li>
                <li><button>Remove</button></li>
                <li><button>Edit</button></li>
            </ul>
            <ul class="items">
                <li value="0"><input type="checkbox"> <label>Artist</label><span class="dots" value="3"><span class="text">3</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="1"><input type="checkbox"> <label>Language: Flametongue</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="2"><input type="checkbox"> <label>Language: Riverspeak</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="3"><input type="checkbox"> <label>Language: Low Realm</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="4"><input type="checkbox"> <label>Language: High Realm</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="5"><input type="checkbox"> <label>Language: Old Realm</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="6"><input type="checkbox"> <label>Language: Dragontongue</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="7"><input type="checkbox"> <label>Ambidextrous</label><span class="dots" value="1"><span class="text">1</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
                <li value="8"><input type="checkbox"> <label>Mentor</label><span class="dots" value="3"><span class="text">3</span><button class="1">1</button><button class="2">2</button><button class="3">3</button><button class="4">4</button><button class="5">5</button></span></li>
            </ul>
        </div>
       `;

let attributeSection = entity =>
    html `
        <div class="sheetmodule attributes">
            <h3>Attributes</h3>
            <ul>
                ${character.attributes.map(a =>
                    html`<li><label>${a}</label>${dots({value : entity['attributes'][a]})}</li>`)}
            </ul>
        </div>
    `

let range = ({min = 0, max = 10}) =>
    [...Array(max - min + 1).keys()].map(i => i + min)
       
let dots = ({value = 2, min = 1, max = 5}) => 
    html `
        <span class="dots" value="2">
            <span class="text">2</span>
                ${range({min: min, max: max})
                    .map(n => html`<button class="${'dot' + n} ${n < value ? 'selected' : 'not-selected'}">${n}</button>`)}
        </span>
    `



export async function renderEntity (entityID, htmelement) {
    let entity = await getEntity(entityID);
    render(entityTemplate(entity), htmelement);
}

