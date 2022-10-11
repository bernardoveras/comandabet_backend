-- CreateTable
CREATE TABLE "user_bets" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "tip_id" TEXT NOT NULL,

    CONSTRAINT "user_bets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_bets" ADD CONSTRAINT "user_bets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_bets" ADD CONSTRAINT "user_bets_tip_id_fkey" FOREIGN KEY ("tip_id") REFERENCES "tip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
