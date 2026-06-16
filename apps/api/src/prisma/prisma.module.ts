import { Global, Module } from "@nestjs/common";
import { prisma } from "@dooh/db";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: async () => {
        await prisma.$connect();
        return prisma;
      },
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
