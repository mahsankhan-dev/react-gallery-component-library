import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ClosePage from "./Cancel";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
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

const Gallery = ({
  openModal,
  selectedImage,
  setSelectedImage,
  imageArray,
  setLeftArrowActive,
  setRightArrowActive,
  leftArrowActive,
  rightArrowActive,
  closeModal,
  isModalOpen,
}: GalleryProps) => {
  const [swiper, setSwiper] = React.useState<any>(null);

  const handleNext = () => {
    const nextImage = (selectedImage + 1) % imageArray.length;
    setSelectedImage(nextImage);
    if (nextImage > 0) {
      setLeftArrowActive(true);
    }
    if (nextImage === imageArray.length - 1) {
      setRightArrowActive(false);
    }
    swiper?.slideTo(nextImage);
  };

  const handlePrev = () => {
    const prevImage =
      (selectedImage - 1 + imageArray.length) % imageArray.length;
    setSelectedImage(prevImage);
    if (prevImage === 0) {
      setLeftArrowActive(false);
    }

    if (prevImage < 5) {
      setRightArrowActive(true);
    }
    swiper?.slideTo(prevImage);
  };
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modalWrapper">
            <div className="modalwrappercontainer">
              <img
                src={imageArray[selectedImage]}
                alt="Selected"
                className="modalwrapperimage"
              />
              <div onClick={closeModal} className="closeicon">
                <ClosePage />
              </div>
              {leftArrowActive && (
                <div onClick={handlePrev} className="lefticon">
                  <LeftArrow />
                </div>
              )}
              {rightArrowActive && (
                <div onClick={handleNext} className="righticon">
                  <RightArrow />
                </div>
              )}
            </div>
            <div className="swipercontainer">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                className="mySwiper-another"
                onSwiper={(swiper: any) => setSwiper(swiper)}
                breakpoints={{
                  280: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {imageArray.map((el, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <img
                        key={ind}
                        src={el}
                        className={`swiperimage ${
                          ind === selectedImage ? "swiperimage2" : ""
                        }`}
                        alt="Icons"
                        onClick={() => openModal(ind)}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="mobile-view">
              {imageArray.map((el, ind) => {
                return (
                  <img
                    key={ind}
                    src={el}
                    className={`mobileviewimage ${
                      ind === selectedImage ? "selectdImage" : ""
                    }`}
                    alt="Icons"
                    onClick={() => openModal(ind)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
