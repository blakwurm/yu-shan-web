let entities = new Map([]);
let relationships = new Map([]);

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

export async function putEntity(newEntity) {
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

//pullEntity("YUentlOak0wTlRrM01qQXl")

