import {html, render} from 'https://unpkg.com/lit-html?module';
import {getEntity, syncEntity} from './lytek.js';

export let entityTemplate = entity => 
    html`
        
		<h1>Yu-Shan Editor</h1>
		<h2>${entity.name}</h2>
		<div>${entity.description}</div>
		<div>${window.location.href}</div>
		<p>Did render?</p>
        `;

export async function renderEntity (entityID, htmelement) {
	let entity = await getEntity(entityID);
	render(entityTemplate(entity), htmelement);
}

