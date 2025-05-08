export default function Edit({ attributes }) {
	const { isHide } = attributes;

	if (isHide) return null;

	return (
		<>
			<div className="mt-[20px] md:mt-[30px] flex justify-center [&:has(.swiper-pagination-lock)]:hidden pointer-events-none">
				<div className="slider-bullets">
					<div className="bullets-wrapper">
						<div className="bullet active" data-index="0"></div>

						<div className="bullet next" data-index="1"></div>

						<div className="bullet next-next" data-index="2"></div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block absolute right-0 bottom-[calc(100%+50px)] pointer-events-none">
				<div className="inline-flex gap-[24px]">
					<button className="nav-btn prev icon-arrow-left-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
					<button className="nav-btn next icon-arrow-right-long flex items-center justify-center h-[50px] w-[60px] text-[20px] text-dark-primary bg-light-primary-60 rounded-[8px] transition-colors cursor-pointer hover:text-white hover:bg-dark-primary-60"></button>
				</div>
			</div>
		</>
	);
}
