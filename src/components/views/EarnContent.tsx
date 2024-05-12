"use client";

import { Box } from "@mui/material";
import CardList from "@/components/ui/CardList";
import { CardProps } from "@/components/ui/Card";
import { MouseEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";

type EarnContentOption = {
  title: string;
  logo: string;
  options: CardProps[];
};

type EarnContentProps = {
  partners: EarnContentOption[];
};

const EarnContent = ({ partners }: EarnContentProps) => {
  const { isAuthenticated, toggleAuthDialog } = useAuth();

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggleAuthDialog()();
  };

  return (
    <Box sx={{ px: 3 }}>
      {partners?.map((partner) => (
        <CardList
          key={partner.title}
          {...partner}
          isScrollable
          noBorder
          hoverBlur
          onListClick={!isAuthenticated ? handleOnClick : undefined}
        />
      ))}
    </Box>
  );
};

export default EarnContent;
