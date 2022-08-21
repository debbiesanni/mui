import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TourCard() {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
 
    },
  });
  const arr = [
    {
      id: 1,
      title: "waiting all night",
      time: "5 hours",
      rating: 4.5,
      review: 234,
      price: 234,
    },

    {
      id: 1,
      title: "Bird night",
      time: "5 hours",
      rating: 4.5,
      review: 234,
      price: 234,
    },
    {
      id: 1,
      title: "Depp John",
      time: "5 hours",
      rating: 4.5,
      review: 234,
      price: 234,
    },
    {
      id: 1,
      title: "Amber hard night",
      time: "5 hours",
      rating: 4.5,
      review: 234,
      price: 234,
    },
  ];
  return (
    <Grid container spacing={2}>
      {arr.map((item, index) => (
        <Grid key={index} xs={3}>
          <ThemeProvider theme={theme}>
            <Paper elevation={3}>
              <img
                src="https://images.unsplash.com/photo-1647891940394-cc80266cbcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt="tour"
                className="image"
              />
              <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTime sx={{ width: 12.5 }} />
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    {item.time}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  marginTop={3}
                >
                  <Rating
                    name="read-only"
                    value={item.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    {item.rating}
                  </Typography>
                  <Typography variant="body3" component="p" marginLeft={0.5}>
                    ({item.review} reviews)
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" marginTop={0}>
                    From ${item.price}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
