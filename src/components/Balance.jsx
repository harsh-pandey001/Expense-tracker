import { Typography, styled, Box } from "@mui/material";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Balance = () => {
  return (
    <Box>
      <BalanceText>Balance: 100</BalanceText>
    </Box>
  );
};

export default Balance;
