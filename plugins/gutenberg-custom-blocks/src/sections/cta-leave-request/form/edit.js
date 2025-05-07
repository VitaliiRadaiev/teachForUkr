import "./editor.scss";


export default function Edit() {
	return (
		<div className="pointer-events-none">
			<div className="flex flex-col gap-[12px]">
				<label className="block">
					<div className="mb-[6px] text-md font-bold text-dark-primary">Ім’я</div>
					<input type="text" className="input" placeholder="Напишіть ваше ім’я" required />
				</label>
				<label className="block">
					<div className="mb-[6px] text-md font-bold text-dark-primary">E-mail</div>
					<input type="mail" className="input" placeholder="Вкажіть вашу пошту" required />
				</label>
				<label className="block">
					<div className="mb-[6px] text-md font-bold text-dark-primary">Повідомлення</div>
					<textarea className="textarea" placeholder="Напишіть ваше повідомлення"></textarea>
				</label>
			</div>
			<div className="mt-[30px]">
				<button className="btn-with-enter-arrow accent-first w-full">
					<span data-text="Зв’язатись"></span>
				</button>
			</div>
		</div>
	);
}
