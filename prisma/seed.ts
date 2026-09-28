import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";
import medias from "../data/media.json" with { type: "json" };
import photographers from "../data/photographer.json" with { type: "json" };
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

/** Remplit la base : les photographes d'abord, puis leurs médias qui y font référence. */
async function main() {
  await prisma.photographer.createMany({
    data: photographers,
  });

  await prisma.media.createMany({
    data: medias,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
