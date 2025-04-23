import apiFetch from "@wordpress/api-fetch";
import clsx from "clsx";

export const getOptionsField = (fieldName) => {
    if(!fieldName) return null;
    return apiFetch({ path: `/site-core/v1/options/?field=${fieldName}` })
}

export const getMarginClasses = (margin) => {
    const top = margin.top ? (margin.top !== 'no' ? `mt-${margin.top}` : 'mt-0') : '';
    const right = margin.right ? (margin.right !== 'no' ? ` mr-${margin.right}` : ' mr-0') : '';
    const bottom = margin.bottom ? (margin.bottom !== 'no' ? ` mb-${margin.bottom}` : ' mb-0') : '';
    const left = margin.left ? (margin.left !== 'no' ? ` ml-${margin.left}` : ' ml-0') : '';

    return `${top}${right}${bottom}${left}`;
}

export const getGapClasses = (gap) => {
    const x = gap.x ? `gap-x-${gap.x}` : '';
    const y = gap.y ? `gap-y-${gap.y}` : '';

    return clsx(x, y);
}

export const getContainerClasses = (val) => {
    if(!(val && val?.trim())) return '';

    return `block-container-${val}`;
}

export const getSectionsMarginClasses = (margin) => {
    const top = margin.top ? (margin.top !== 'no' ? `section-mt-${margin.top}` : 'mt-0') : '';
    const right = margin.right ? (margin.right !== 'no' ? ` section-mr-${margin.right}` : ' mr-0') : '';
    const bottom = margin.bottom ? (margin.bottom !== 'no' ? ` section-mb-${margin.bottom}` : ' mb-0') : '';
    const left = margin.left ? (margin.left !== 'no' ? ` section-ml-${margin.left}` : ' ml-0') : '';

    return `${top}${right}${bottom}${left}`;
}

export const getSectionsPaddingClasses = (margin) => {
    const top = margin.top ? (margin.top !== 'no' ? `section-pt-${margin.top}` : 'pt-0') : '';
    const right = margin.right ? (margin.right !== 'no' ? ` section-pr-${margin.right}` : ' pr-0') : '';
    const bottom = margin.bottom ? (margin.bottom !== 'no' ? ` section-pb-${margin.bottom}` : ' pb-0') : '';
    const left = margin.left ? (margin.left !== 'no' ? ` section-pl-${margin.left}` : ' pl-0') : '';

    return `${top}${right}${bottom}${left}`;
}

export function removeDomain(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.pathname;
    } catch (e) {
        console.error("Invalid URL:", e);
        return null;
    }
}

export const getUrlToStaticImages = (endUrl) => {
    return `${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/${endUrl}`;
}

export const combineString = ({ prefix = '', postfix = '' }, value ) => {
    if(!value) return '';
    return `${prefix}${value}${postfix}`;
}

export const getFlexAligmentClasses = (key) => {
    if(!key) return '';

    const classesMap = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
        ['space-between']: 'justify-between'
    }

    return classesMap[key] || '';
}

export const mergeRefs = (...refs) => {
    return (el) => {
        refs.forEach((ref) => {
            if (!ref) return;
            if (typeof ref === "function") {
                ref(el);
            } else {
                ref.current = el;
            }
        });
    };
}

export const debounce = (func, wait) => {
    let timeout;

    function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    }

    debounced.cancel = function () {
        clearTimeout(timeout);
    };

    return debounced;
}
export const throttle = (func, limit) =>  {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

export const buildApiPath = (basePath, query = {}) => {
	const url = new URL(basePath, window.location.origin);
	const params = new URLSearchParams();

	Object.entries(query).forEach(([key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			params.set(key, value);
		}
	});

	url.search = params.toString();
	return url.pathname + url.search;
};
