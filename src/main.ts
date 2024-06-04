import { prismaClient } from "./config/prisma";
import * as dotenv from "dotenv";
import { app } from "./app";

dotenv.config();
const port = +process.env.__SERVER_PORT! || 5000;

async function main() {
  await prismaClient.$connect();

  app.listen(port, () => {
    console.log(`Your server is running, Check : http://localhost:${port}`);
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prismaClient.$disconnect();
  });
