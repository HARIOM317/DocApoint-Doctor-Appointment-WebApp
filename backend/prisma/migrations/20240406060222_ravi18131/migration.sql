-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "subject" TEXT,
    "text" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
