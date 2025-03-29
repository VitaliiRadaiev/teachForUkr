import {
	useBlockProps,
	useInnerBlocksProps
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {

	const blockProps = useBlockProps({
		className: "alignfull main-hero pt-[112px] md:pt-[127px] xl:pt-[102px] overflow-hidden",
	});

	const { children } = useInnerBlocksProps({}, {
		template: [
			["t4u/inner-block", {
				classes: 'md-max:mx-auto md-max:max-w-[375px] xl:shrink-0 xl:grow-0 xl:max-w-[660px] 4xl:max-w-[840px] xl:py-[57px] 4xl:py-[104px]',
				options: {
					template: [
						['t4u/hero-main-titles-text', {}],
						["t4u/inner-block", {
							classes: 'mt-[30px] md:mt-[40px] xl:mt-[65px] 4xl:mt-[80px]',
							options: {
								template: [
									["t4u/button", {
										acfField: 'link_become_partner',
										classes: 'md-max:w-full md-max:max-w-[375px]'
									}],
								],
								allowedBlocks: ["t4u/button"]
							}
						}]
					],
					allowedBlocks: []
				},
			}],
			["t4u/inner-block", {
				classes: "mt-[30px] md:mt-[40px] xl:self-end xl:mt-0 relative h-[404px] md:h-[446px] xl:h-[662px] 4xl:h-[772px] xl:shrink xl:grow xl:max-w-[631px] 4xl:max-w-[788px]",
				simpleWrapper: true,
				options: {
					template: [
						["t4u/inner-block", {
							classes: "absolute top-0 left-1/2 xl:left-0 xl-max:-translate-x-1/2 w-svw h-full xl:w-[calc(100%+40px)] 2xl:w-[calc(100%+60px)] 4xl:w-[calc(100%+80px)]",
							simpleWrapper: true,
							options: {
								template: [
									['t4u/image', { classes: "absolute z-2 inset-0 object-contain object-center-bottom left-1/2 -translate-x-1/2 h-full w-full max-w-[375px] md:max-w-[550px] xl:max-w-none" }],
									['t4u/hero-main-decor', {}],
									['t4u/hero-main-decor-buttons', {}],
								],
								allowedBlocks: []
							}
						}]
					],
					allowedBlocks: []
				},
			}]
		],
		allowedBlocks: []
	})

	return (
		<section {...blockProps}>
			<div className="container xl:flex xl:gap-x-[30px] xl:justify-between">
				{children}
			</div>
		</section>
	);
}
