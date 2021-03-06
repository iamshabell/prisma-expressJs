-- CreateTable
CREATE TABLE "_AuthorPublisher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorPublisher_AB_unique" ON "_AuthorPublisher"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorPublisher_B_index" ON "_AuthorPublisher"("B");
