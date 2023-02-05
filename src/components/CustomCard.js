import { Box } from "@mui/material";
import React from "react";

const CustomCard = () => {
  return (
    <Box
      p={2}
      bgcolor="white"
      width={400}
      sx={{ borderRadius: 1 }}
      className="border-gradient"
    >
      <img
        width="100%"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
      />
    </Box>
  );
};

export default CustomCard;
