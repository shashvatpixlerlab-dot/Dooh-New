import { Global, Module } from "@nestjs/common";
import { prisma } from "@dooh/db";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: () => prisma,
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
