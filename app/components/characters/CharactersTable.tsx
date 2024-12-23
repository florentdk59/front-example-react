"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";

const columns = [
    { "key" : "id", "label" : "ID MARVEL" },
    { "key" : "name", "label" : "NOM" },
    { "key" : "urlPicture", "label" : "IMAGE" }
];
const CharactersTable = ({characters}) => {
  console.log("CharactersTable characters" + JSON.stringify(characters));
  if (!characters || !characters.length) {
      return <>
        characters table vide {characters}
      </>;
  }
  return <>
         characters table start
          <Table aria-label="Example table with dynamic content">
            <TableHeader>
              {columns.map((column) =>
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody>
              {characters.map((character) =>
                <TableRow key={character.id}>
                  <TableCell>{character.id}</TableCell>
                  <TableCell>{character.name}</TableCell>
                  <TableCell><img width="50" height="50" src={character.urlPicture} /></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
         characters table end
  </>;
};

export default CharactersTable;