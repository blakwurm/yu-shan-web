let entities = new Map([]);
let relationships = new Map([]);

let pullEntity = entityID =>
	fetch(`https://api.yu-shan.com/entities/publius/v1?id=${entityID}`)
		.then(a => a.json())
		.then(a => a["data"])
		.then(a => a[0])
		.then(a => entities.set(entityID, a))
		.then(a => entities.get(entityID))

let pullRelationshipsForEntity = entityID =>
	fetch(`https://api.yu-shan.com/relationships/publius/v1?owner=${entityID}&count=9999`)
	.then(a => a.json())
	.then(a => a["data"])
	.then(a => a)

export async function getEntity(entityID) {
	if (entities.has(entityID)) {
		// Initiates an entity update, and returns the cached entity
		pullEntity(entityID);
		return entities.get(entityID);
	} else {
		return await pullEntity(entityID);
	}
}

// Syncs the entity with the server
export async function syncEntity(entityID) {
	let resulto = await fetch( {
		method: "PUT",
		body: JSON.stringify(
			{data: entities.get(entityID)}
		)});	
}

//pullEntity("YUentlOak0wTlRrM01qQXl")

