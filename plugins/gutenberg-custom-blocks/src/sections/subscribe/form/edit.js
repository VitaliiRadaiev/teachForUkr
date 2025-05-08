import useFetchOnVisible from "../../../hooks/hooks";
import { getOptionsField, mergeRefs } from "../../../utils/utils";

export default function Edit() {
	const fetchPlaceholder = () => getOptionsField('text_subscribe_placeholder');
	const { ref: placeholderRef, data: placeholder } = useFetchOnVisible(fetchPlaceholder);

	const fetchButton = () => getOptionsField('text_subscribe');
	const { ref: buttonRef, data: button } = useFetchOnVisible(fetchButton);

	return (
		<div ref={mergeRefs(placeholderRef, buttonRef)} className="subscribe-form flex items-center bg-background pointer-events-none">
			<input
				type="text"
				className="subscribe-form-input w-full flex items-center placeholder:text-dark-primary-60 !text-dark-primary !outline-none !bg-transparent !p-0 !border-none"
				placeholder={(!!placeholder && placeholder.value) || 'Вкажіть вашу пошту'}
			/>
			<button className="subscribe-form-submit btn-secondary btn-secondary-sm accent-first">
				<span data-text={(!!button && button.value) || 'Підписатися'}></span>
			</button>
		</div>
	);
}
