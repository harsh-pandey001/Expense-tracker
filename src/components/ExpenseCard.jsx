import { Card, Typography, Box,styled,CardContent } from "@mui/material";

const Container = styled(Box)
`
display:flex;
& > div {
    flex: 1;
    padding: 10px;
}

`

const ExpenseCard = ({}) => {
  return (
    <Container>
        <Card>
        <CardContent>
            <Typography>Income</Typography>
            <Typography style = {{color : 'green'}}>25</Typography>
        </CardContent>
        </Card>        
        <Card>
        <CardContent>
            <Typography>Expense</Typography>
            <Typography style = {{color : 'Red'}}>10</Typography>
        </CardContent>
        </Card>        
    </Container>
  )
}


export default ExpenseCard;

