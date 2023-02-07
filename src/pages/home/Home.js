import React, { Suspense } from "react";
import Loader from "../../components/Loader";
import { Box, Container, Stack } from "@mui/material";
import HeroSection from "../../components/HeroSection";
import Locations from "../../components/Locations";
import Episodes from "../../components/Episodes";
import Characters from "../../components/Characters";

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Box>
        <Container maxWidth="xl" sx={{ pb: 8 }}>
          <Stack spacing={2}>
            <HeroSection />
            <Characters />
            <Episodes />
            <Locations />
          </Stack>
        </Container>
      </Box>
    </Suspense>
  );
}

export default Home;
