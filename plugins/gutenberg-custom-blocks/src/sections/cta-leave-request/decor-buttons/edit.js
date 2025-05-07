import apiFetch from "@wordpress/api-fetch";
import useFetchOnVisible from "../../../hooks/hooks";


export default function Edit({ attributes }) {
	const { classes } = attributes;

	const fetchData = () => apiFetch({ path: 'site-core/v1/cta-form-decor-buttons' });
	const { ref, data } = useFetchOnVisible(fetchData);


	return (
		<div ref={ref} className={classes}>
			<div className="flex gap-[2px]">
				<div className="decor-btn decor-btn-1">
					{data ? data[0] : 'Розвиток'}
				</div>
				<div className="decor-btn decor-btn-2 origin-bottom-right rotate-[30deg] translate-x-[-40px] md:translate-x-[-50px] translate-y-[6px] md:translate-y-[8px]">
					{data ? data[1] : 'Команда'}
				</div>
			</div>
			<div className="">
				<div className="ml-[40px] decor-btn decor-btn-3">
					{data ? data[2] : 'Відповідальність'}
				</div>
			</div>
		</div>
	);
}
