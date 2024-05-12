"use client";

import {
  Box,
  Grid,
  Link,
  Card as MuiCard,
  CardProps as MuiCardProps,
  Rating,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@/components/ui/Typography";
import colors from "@/theme/colors";

export type CardProps = MuiCardProps & {
  imageUrl?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  alignCenter?: boolean;
  width?: number;
  rating?: number;
  noBorder?: boolean;
  hoverBlur?: boolean;
  href?: string;
  scale?: boolean;
};

const Image = styled("img")({
  objectFit: "contain",
  objectPosition: "center",
});

const CardComp = styled(MuiCard, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" &&
    prop !== "backgroundImage" &&
    prop !== "noBorder" &&
    prop !== "width" &&
    prop !== "hoverBlur" &&
    prop !== "scale",
})<CardProps>(
  ({
    theme,
    backgroundColor,
    backgroundImage,
    width,
    noBorder,
    hoverBlur,
    scale,
  }) => ({
    width,
    overflow: "unset",
    transition: "transform 0.2s ease-in-out",
    background: backgroundColor,
    ...(backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
        }
      : undefined),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4, 2),
    "& .hover-blur": {
      inset: 0,
      opacity: 0,
      left: "50%",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      transition: "transform 0.2s ease-in-out",
    },
    "&:hover": {
      cursor: "pointer",
      ...(scale ? { transform: "scale(1.05)" } : undefined),
      ...(!noBorder
        ? { border: `1px solid ${theme.palette.secondary.main}` }
        : undefined),
      "& img.logo": {
        ...(hoverBlur ? { filter: "blur(8px)" } : undefined),
      },
      "& .MuiRating-root": {
        ...(hoverBlur ? { filter: "blur(8px)" } : undefined),
      },
      "& .hover-blur": {
        opacity: 1,
      },
    },
  })
);

const Card = (props: CardProps) => {
  const {
    imageUrl,
    title,
    rating,
    href,
    backgroundColor,
    backgroundImage,
    width,
    noBorder,
    hoverBlur,
    scale,
  } = props;
  const extraProps = {
    backgroundColor,
    backgroundImage,
    width,
    noBorder,
    hoverBlur,
    scale,
    component: href ? Link : undefined,
    href,
  };

  return (
    <CardComp
      {...extraProps}
      sx={{ position: "relative", display: "flex", textDecoration: "none" }}
    >
      {props?.hoverBlur && (
        <Box className={"hover-blur"}>
          <Box
            sx={{
              transform: "translateX(-50%)",
              backgroundColor: colors.background.secondary,
              borderRadius: 10,
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
            }}
          >
            <Image
              src={"https://freecash.com/public/img/play-offer.svg"}
              alt="play-button"
            />
          </Box>
        </Box>
      )}
      <Box>
        <Grid
          container
          gap={2}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Grid item>
            {imageUrl && (
              <Image
                className="logo"
                src={imageUrl}
                alt={title!}
                width={100}
                height={100}
              />
            )}
          </Grid>
          <Grid item>
            <Typography alignCenter isBold variant="subtitle2">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <div>
          {rating && (
            <Rating
              defaultValue={rating}
              precision={0.5}
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
              }
              size="small"
            />
          )}
        </div>
      </Box>
    </CardComp>
  );
};

export default Card;
