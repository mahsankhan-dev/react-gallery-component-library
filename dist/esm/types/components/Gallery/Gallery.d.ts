import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Gallery.css";
interface GalleryProps {
    selectedImage: any;
    setSelectedImage: (value: any) => void;
    imageArray: string[];
    setLeftArrowActive: (value: boolean) => void;
    leftArrowActive: boolean;
    rightArrowActive: boolean;
    setRightArrowActive: (value: boolean) => void;
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: (index: number) => void;
}
declare const Gallery: ({ openModal, selectedImage, setSelectedImage, imageArray, setLeftArrowActive, setRightArrowActive, leftArrowActive, rightArrowActive, closeModal, isModalOpen, }: GalleryProps) => React.JSX.Element;
export default Gallery;
