import {html, render} from 'https://unpkg.com/lit-html?module';
import {getEntity, syncEntity} from './lytek.js';

export let entityTemplate = entity => 
    html`
<div id="title">
	<h1>${entity.name}</h1>
</div>
<p>Please press "save" to save your changes to the server</p>
<div id="content">
	<div id="coreInfo">
		<div>
			<label>Name: </label> <input value="${entity.name}" />
	    </div>
				<input value="${entity.name}" />
		<div>${entity.description}</div>
	</div>
	<div>${window.location.href}</div>
	<p>Did render?</p>
</div>
       `;

export async function renderEntity (entityID, htmelement) {
	let entity = await getEntity(entityID);
	render(entityTemplate(entity), htmelement);
}

