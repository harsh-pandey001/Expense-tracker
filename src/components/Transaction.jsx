

import { Box, Typography, Divider,List } from '@mui/material'
import React from 'react'
import Trans from './Trans'

const Transaction = ({transaction}) => {
  return (
   <Box>
    <Typography variant='h5'>Transaction History</Typography>
    <Divider/>
    <List>
    {
      transaction.map(transaction =>(
        <Trans transaction = {transaction} />
      ))
    }
    </List>
   </Box>
  )
}

export default Transaction
