import Dexie from 'dexie';

export const db = new Dexie('peopleDatabase');

db.version(1).stores({
  people: '++id, name, age, createdAt'
});

export async function addPerson(person) {
  return await db.people.add({
    ...person,
    createdAt: new Date().toISOString()
  });
}

export async function getPeople() {
  return await db.people.toArray();
}

export async function deletePerson(id) {
  return await db.people.delete(id);
}
