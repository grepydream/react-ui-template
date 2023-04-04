import { Box, SimpleGrid } from "@chakra-ui/react";
// Assets

import React from "react";
import ReactImageAnnotate from "react-image-annotate";

export default function Annotation() {
  const categories = [
    { supercategory: "Person", id: 1, name: "Person" },
    { supercategory: "Animal", id: 2, name: "Bird" },
    { supercategory: "Animal", id: 3, name: "Cat" },
    { supercategory: "Animal", id: 4, name: "Cow" },
    { supercategory: "Animal", id: 5, name: "Dog" },
    { supercategory: "Animal", id: 6, name: "Horse" },
    { supercategory: "Animal", id: 7, name: "Sheep" },
    { supercategory: "Vehicle", id: 8, name: "Aeroplane" },
    { supercategory: "Vehicle", id: 9, name: "Bicycle" },
    { supercategory: "Vehicle", id: 10, name: "Boat" },
    { supercategory: "Vehicle", id: 11, name: "Bus" },
    { supercategory: "Vehicle", id: 12, name: "Car" },
    { supercategory: "Vehicle", id: 13, name: "Motorbike" },
    { supercategory: "Vehicle", id: 14, name: "Train" },
    { supercategory: "Indoor", id: 15, name: "Bottle" },
    { supercategory: "Indoor", id: 16, name: "Chair" },
    { supercategory: "Indoor", id: 17, name: "Dining table" },
    { supercategory: "Indoor", id: 18, name: "Potted plant" },
    { supercategory: "Indoor", id: 19, name: "Sofa" },
    { supercategory: "Indoor", id: 20, name: "TV" },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <ReactImageAnnotate
          labelImages
          enabledTools={["select", "create-box", "create-polygon"]}
          images={[
            {
              src: "https://placekitten.com/408/287",
              name: "Image 1",
              regions: [],
            },
          ]}
          regionClsList={categories.map((item) => {
            return item.name;
          })}
          regionTagList={["difficult", "truncated"]}
          hideSettings={true}
        />
      </SimpleGrid>
    </Box>
  );
}
