import { binarySearch, insertionSort } from './util.service';

export const storageService = {
	query,
	post,
	put,
	remove,
	get,
};

async function query(entityType, delay = 0) {
	const entities = JSON.parse(localStorage.getItem(entityType) || 'null') || [];
	if (delay) {
		return new Promise(resolve => setTimeout(resolve, delay, entities));
	}
	return entities;
}

async function get(entityType, entityId) {
	const entities = await query(entityType);
	// const entity = entities.find(entity => entity.id === entityId);
	const entity = binarySearch(entities, entityId, false, (target, entity) => {
		if (target === entity.id) return 1;
		if (target < entity.id) return -1;
	});
	if (!entity)
		throw new Error(
			`Cannot get, Item ${entityId} of type: ${entityType} does not exist`
		);
	return entity;
}

async function post(entityType, newEntity, comprator) {
	const entities = await query(entityType);
	entities.push(newEntity);
	if (!comprator)
		comprator = (entityA, entityB) => (entityA.id > entityB.id ? 1 : -1);
	insertionSort(entities, comprator);
	_save(entityType, entities);
	return newEntity;
}

async function put(entityType, updatedEntity, comprator, searchFunction) {
	const entities = await query(entityType);
	if (!searchFunction)
		searchFunction = (target, entity) => {
			if (target === entity.id) return 1;
			if (target < entity.id) return -1;
		};

	const idx = binarySearch(entities, updatedEntity.id, true, searchFunction);

	entities[idx] = updatedEntity;

	if (!comprator)
		comprator = (entityA, entityB) => (entityA.id > entityB.id ? 1 : -1);

	insertionSort(entities, comprator);

	_save(entityType, entities);
	return updatedEntity;
}

async function remove(entityType, entityId) {
	const entities = await query(entityType);
	const idx = binarySearch(entities, entityId, true, (target, entity) => {
		if (target === entity.id) return 1;
		if (target < entity.id) return -1;
	});
	if (idx !== -1) entities.splice(idx, 1);
	else
		throw new Error(
			`Cannot remove, item ${entityId} of type: ${entityType} does not exist`
		);
	_save(entityType, entities);
	return true;
}

function _save(entityType, entities) {
	localStorage.setItem(entityType, JSON.stringify(entities));
}
