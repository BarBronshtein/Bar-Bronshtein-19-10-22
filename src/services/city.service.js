import { storageService } from './async-storage.service';

export const cityService = {
	add,
	remove,
	query,
};

const STORAGE_KEY = 'citiesDB';

async function query() {
	return await storageService.query(STORAGE_KEY);
}

async function remove(cityId) {
	await storageService.remove(STORAGE_KEY, cityId);
}

async function add(city) {
	return await storageService.post(STORAGE_KEY, city);
}
