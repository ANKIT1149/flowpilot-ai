import 'dotenv/config';
import { db } from '../src/db';
import { users } from '../src/db/schema';


async function main() {
  await db
    .insert(users)
    .values({
      name: 'Aryansh',
      age: 22,
      email: 'aryansh@gmail.com',
    })
    .onConflictDoUpdate({
      target: users.email,
      set: { age: 22, name: 'Aryansh' },
    });
}

main();
