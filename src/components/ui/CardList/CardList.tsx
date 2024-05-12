"use client";

import {
  Children,
  MouseEvent,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { Box, Grid, Paper, Tabs } from "@mui/material";
import Typography from "../Typography";
import Card, { CardProps } from "../Card";

export type CardListProps = {
  title: string;
  logo?: string;
  options: CardProps[];
  isScrollable?: boolean;
  width?: number;
  noBorder?: boolean;
  hoverBlur?: boolean;
  scale?: boolean;
  onListClick?: (event: MouseEvent) => void;
};

const RenderListComp = ({
  children,
  isScrollable,
}: {
  isScrollable: boolean;
  children: ReactNode;
}) =>
  isScrollable ? (
    <Tabs variant={"scrollable"} scrollButtons={false} value={false}>
      {children}
    </Tabs>
  ) : (
    <Grid container spacing={2}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        return (
          <Grid item>
            {cloneElement(child, {
              ...child.props,
              children: child.props.children,
            })}
          </Grid>
        );
      })}
    </Grid>
  );

const CardList = ({
  title,
  logo,
  options,
  isScrollable,
  width,
  noBorder,
  hoverBlur,
  scale,
  onListClick,
}: CardListProps) => {
  return (
    <Paper elevation={0}>
      <Box sx={{ py: 4 }}>
        <Grid container alignItems="center" gap={1} sx={{ mb: 2 }}>
          {logo && (
            <Grid item>
              <img src={logo} alt={title} width={24} height={24} />
            </Grid>
          )}
          <Grid item>
            <Typography isBold variant="h5" gutterBottom>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Box onClick={onListClick}>
          <RenderListComp isScrollable={!!isScrollable}>
            {options?.map((survey) => (
              <Card
                variant="outlined"
                key={survey?.title}
                {...survey}
                width={width}
                noBorder={noBorder}
                hoverBlur={hoverBlur}
                scale={scale}
              />
            ))}
          </RenderListComp>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardList;
