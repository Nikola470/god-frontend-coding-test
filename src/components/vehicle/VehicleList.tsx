import type { FC } from "react";
import { Vehicle } from "../../models/Vehicle";
import { VehicleItem } from "./VehicleItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { View } from "vcc-ui";

type VehicleListProps = {
  vehicles: Vehicle[];
};

export const VehicleList: FC<VehicleListProps> = ({ vehicles }) => {
  let settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <View paddingLeft={5} paddingRight={5}>
      <Slider {...settings}>
        {vehicles.map((vehicle) => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} />
        ))}
      </Slider>
    </View>
  );
};
