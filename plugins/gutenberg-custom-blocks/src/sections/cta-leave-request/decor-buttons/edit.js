import apiFetch from "@wordpress/api-fetch";
import useFetchOnVisible from "../../../hooks/hooks";


export default function Edit({ attributes }) {
	const { classes } = attributes;

	const fetchData = () => apiFetch({ path: 'site-core/v1/cta-form-decor-buttons' });
	const { ref, data } = useFetchOnVisible(fetchData);


	return (
		<div ref={ref} className={classes}>
			<div class="relative w-[205px] xl:w-[232px] 4xl:w-[245px] h-[74px] xl:h-[92px] 4xl:h-[100px] flex flex-col items-start">
				<div class="!absolute right-[82px] md:right-[96px] 4xl:right-[106px] bottom-[37px] md:bottom-[47px] 4xl:bottom-[52px] decor-btn decor-btn-1">
					{data ? data[0] : 'Розвиток'}
				</div>
				<div class="!absolute right-[17px] md:right-[16px] 4xl:right-[15px] bottom-[31px] md:bottom-[39px] 4xl:bottom-[43px] decor-btn decor-btn-2 origin-bottom-right rotate-[30deg]">
					{data ? data[1] : 'Команда'}
				</div>

				<div class="!absolute bottom-0 right-0 decor-btn decor-btn-3">
					{data ? data[2] : 'Відповідальність'}
				</div>
			</div>
		</div>
	);
}
