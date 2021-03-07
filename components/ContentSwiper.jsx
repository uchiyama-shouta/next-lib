import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "./SwiperCard";
import "swiper/swiper-bundle.min.css";

// 16
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const elArr = ["red", "blue", "yellow", "green"];

const ContentSwiper = () => {
	return (
		<>
			<div className="root">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					pagination={{
						type: "bullets",
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={true}
					loop={true}
					autoplay={{
						delay: 2000,
					}}
				>
					{elArr.map((el, index) => (
						<SwiperSlide key={el}>
							<SwiperCard value={`Slide ${index + 1}`} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<style jsx>{`
				.root {
					width: 85%;
					margin: 0 auto;
				}
				.mr-0 {
					margin: 0;
				}
			`}</style>
		</>
	);
};

export default ContentSwiper;
