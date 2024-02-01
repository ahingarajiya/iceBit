import React from 'react'
import Btn from "./Btn";


export default function DHistorybtn() {
    let msg = "Download history"
    const handleDownload = () => {
        const historyData = JSON.parse(localStorage.getItem('history')) || [];
        const dataToDownload = historyData.map((entry) => entry.data);
        const jsonData = JSON.stringify(dataToDownload, null, 2);
    
        const blob = new Blob([jsonData], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'historyData.json';
        link.click();
        // console.log("done");
      };
    const handleClick = () => {
        // console.log("dowload history");
        handleDownload()
      };
      
  return (
    <div>
    <Btn click={handleClick} child = {msg}> </Btn>

    </div>
  )
}
