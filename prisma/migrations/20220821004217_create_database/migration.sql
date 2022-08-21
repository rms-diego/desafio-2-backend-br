-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userDocument" TEXT NOT NULL,
    "creditCardToken" TEXT NOT NULL,
    "value" INTEGER NOT NULL
);
