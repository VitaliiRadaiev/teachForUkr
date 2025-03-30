import apiFetch from "@wordpress/api-fetch";

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