import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux'
import {pageChangeReducer} from "./mySlice"

export default function PagiNation() {


    const handleChange = (event, value) => { 
        dispatch(pageChangeReducer(value))
    }; 

    const dispatch = useDispatch()

  return (<>
    
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton  onChange={handleChange} />
        </Stack>
        </>
  )
}

