import { db } from './db';
import { users } from './schema';
import { hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';

async function main() {
  console.log('🌱 Seeding database...');

  const email = 'demo@demo.com';
  const password = 'demo';
  
  // Hash password
  const hashedPassword = await hash(password, 10);

  // Check if user exists
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    console.log(`User ${email} already exists. Updating password...`);
    await db.update(users)
      .set({ password: hashedPassword })
      .where(eq(users.email, email));
  } else {
    console.log(`Creating user ${email}...`);
    await db.insert(users).values({
      name: 'Demo User',
      email,
      password: hashedPassword,
    });
  }

  console.log('✅ Seeding complete!');
  console.log(`User: ${email}`);
  console.log(`Pass: ${password}`);

  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
