import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import Btn from "./Btn";
import DHistorybtn from "./DHistorybtn";

export default function Historya() {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return (
    <>
      <div>
        <h1>
          History is ...
        </h1>
        <DHistorybtn></DHistorybtn>

        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Visited Time</TableCell>
              <TableCell>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.visitedTime}</TableCell>
                <TableCell>
                  <pre>{JSON.stringify(entry.data, null, 2)}</pre>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
      
    </>
  );
}
