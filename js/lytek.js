import Freezer from './freezer/freezer.js';

let entities = new Map([]);
let relationships = new Map([]);

let frz = new Freezer([]);
console.log(frz);
console.log("Hello World!");

let getEntityFromServer = entityID =>
	fetch(`https://api.yu-shan.com/entities/publius/v1?id=${entityID}`)
		.then(a => a.json())
		.then(a => a["data"])
		.then(a => a[0])
//	.then(a => entities.get(entityID))

async function pullEntity(entityID) {
	const entity = await getEntityFromServer(entityID);
	entities.set(entityID, JSON.stringify(entity))
	return entity
}

let pullRelationshipsForEntity = entityID =>
	fetch(`https://api.yu-shan.com/relationships/publius/v1?owner=${entityID}&count=9999`)
	.then(a => a.json())
	.then(a => a["data"])
	.then(a => a)

export async function getEntity(entityID) {
	if (entities.has(entityID)) {
		// Initiates an entity update, and returns the cached entity
		pullEntity(entityID);
		return JSON.parse(entities.get(entityID));
	} else {
		return await pullEntity(entityID);
	}
}

async function putEntity(newEntity) {
	const newEntityString = JSON.stringify(newEntity);
	entities.set(newEntity.id, newEntityString);
	return newEntity;
}

// Syncs the entity with the server
export async function syncEntity(entityID) {
	let resulto = await fetch( {
		method: "PUT",
		body: JSON.stringify(
			{data: JSON.parse(entities.get(entityID))}
		)});	
}

export async function changeEntity(entityID, mutateFn) {
	let hydrEntity = await getEntity(entityID);
	mutateFn(hydrEntity);
	putEntit(hydrEntity);
	return hydrEntity;
}

//pullEntity("YUentlOak0wTlRrM01qQXl")

