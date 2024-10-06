import SwiperCore, {
	Autoplay,
	EffectFade,
	Grid,
	Navigation,
	Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
	const props = {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	};
	return (
		<div className="content testimonials">
			{/* title */}
			<div className="title">Testimonials</div>
			{/* content */}
			<div className="row testimonials-items">
				{/* client item */}
				<div className="col col-d-12 col-t-12 col-m-12 border-line-v">
					<div className="revs-carousel default-revs">
						<Swiper {...props} className="owl-carousel">
							<SwiperSlide className="item">
								<div className="revs-item">
									<div className="text">
										Sumit is always participating in class and problem solves
										well. He is a team player, always ready to help his
										classmates in whatever way he can. 
									</div>
									<div className="user">
										<div className="img">
											<img src="images/testi1.jpg" alt="" />
										</div>
										<div className="info">
											<div className="name">Peter Parker</div>
											<div className="company">Technical Consultant</div>
										</div>
										<div className="clear" />
									</div>
								</div>
							</SwiperSlide>
						

							<div className="swiper-pagination"></div>
						</Swiper>
					</div>
				</div>
				<div className="clear" />
			</div>
		</div>
	);
};
export default Testimonials;
