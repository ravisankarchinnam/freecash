"use client";

import { Box } from "@mui/material";
import Typography from "@/components/ui/Typography";
import CardList from "@/components/ui/CardList";
import { useAuth } from "@/contexts/AuthContext";
import { MouseEvent } from "react";

type CashoutOption = {
  title: string;
  logo?: string;
  options: {
    title: string;
    imageUrl: string;
    backgroundColor: string;
  }[];
};

type CashoutContentProps = {
  title: string;
  description: string;
  options: CashoutOption[];
};

const CashoutContent = ({
  title,
  description,
  options,
}: CashoutContentProps) => {
  const { isAuthenticated, toggleAuthDialog } = useAuth();

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggleAuthDialog()();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ py: 4 }}>
        <Typography isBold variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </Box>
      <Box>
        {options?.map((option) => (
          <CardList
            key={option?.title}
            {...option}
            scale
            onListClick={!isAuthenticated ? handleOnClick : undefined}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CashoutContent;
