import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Box>
      <Button variant="contained" component="label">
        Choose File
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </Button>

      {selectedImage && (
        <Box mt={2}>
          <Typography>Preview:</Typography>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', maxHeight: 300, objectFit: 'contain' }}
          />
        </Box>
      )}
    </Box>
  );
}

export default ImageUploader;
