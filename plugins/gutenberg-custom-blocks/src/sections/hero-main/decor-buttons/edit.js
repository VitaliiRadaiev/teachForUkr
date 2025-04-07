import apiFetch from "@wordpress/api-fetch";
import useFetchOnVisible from "../../../hooks/hooks";

export default function Edit() {
	const fetchData = () => apiFetch({ path: 'site-core/v1/hero-main-decor-buttons' });
	const { ref, data } = useFetchOnVisible(fetchData);

	return (
		<div ref={ref} className="hero-main-decor-buttons flex gap-[2px] absolute z-3 left-1/2 md:left-[53%] xl:left-[55%] -translate-x-1/2 bottom-[62px] md:bottom-[56px] xl:bottom-[115px]">
			<div className="hero-main-decor-buttons-left flex flex-col gap-[2px] items-end">
				<div className="decor-btn decor-btn-1"> 
					{data ? data[0] : 'Учасники'}
				</div>
				<div className="decor-btn decor-btn-2">
					{data ? data[1] : 'Діти'}
				</div>
			</div>
			<div className="hero-main-decor-buttons-center">
				<div className="decor-btn decor-btn-3">
					{data ? data[2] : 'Навчай'}
				</div>
			</div>
			<div className="hero-main-decor-buttons-right flex flex-col items-start gap-[2px]">
				<div className="decor-btn decor-btn-4">
					{data ? data[3] : 'Вчителі'}
				</div>
				<div className="decor-btn decor-btn-5">
					{data ? data[4] : 'Школи'}
				</div>
			</div>
		</div>
	);
}
