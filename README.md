````markdown
# react-gallery-component-library

A versatile React component library for creating stunning galleries and image showcases in your web applications with ease.

## Installation

To install `react-gallery-component-library`, you can use npm or yarn.

```bash
npm install react-gallery-component-library
# or
yarn add react-gallery-component-library
```
````

## Usage

```jsx
import React from "react";
import { Gallery } from "react-gallery-component-library";

type ImageIndex = number | null;

function Example() {
  const [isModalOpen, setIsModalOpen] = React.useState < boolean > false;
  const [selectedImage, setSelectedImage] = React.useState < ImageIndex > null;
  const [leftArrowActive, setLeftArrowActive] =
    React.useState < boolean > false;
  const [rightArrowActive, setRightArrowActive] =
    React.useState < boolean > true;
  let imageArray = [
    "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  ];
  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    if (index > 0) {
      setLeftArrowActive(true);
    } else {
      setLeftArrowActive(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="App">
      {imageArray.map((el, ind) => (
        <img
          key={ind}
          src={el}
          className="wrapperimg"
          alt="Office"
          onClick={() => openModal(ind)}
        />
      ))}
      <Gallery
        openModal={openModal}
        closeModal={closeModal}
        imageArray={imageArray}
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        setLeftArrowActive={setLeftArrowActive}
        leftArrowActive={leftArrowActive}
        rightArrowActive={rightArrowActive}
        setRightArrowActive={setRightArrowActive}
      />
    </div>
  );
}

export default Example;
```

## Props

- `openModal`: `(index: number) => void`

  - Function to open the modal with the selected image index.

- `closeModal`: `() => void`

  - Function to close the modal.

- `imageArray`: `string[]`

  - Array of image URLs.

- `isModalOpen`: `boolean`

  - Boolean to track if the modal is open or closed.

- `selectedImage`: `number | null`

  - Index of the selected image in the array.

- `setSelectedImage`: `(index: number | null) => void`

  - Function to set the selected image index.

- `setLeftArrowActive`: `(active: boolean) => void`

  - Function to set the state of left arrow activation.

- `leftArrowActive`: `boolean`

  - Boolean to track if the left arrow is active.

- `rightArrowActive`: `boolean`

  - Boolean to track if the right arrow is active.

- `setRightArrowActive`: `(active: boolean) => void`
  - Function to set the state of right arrow activation.

```

```
