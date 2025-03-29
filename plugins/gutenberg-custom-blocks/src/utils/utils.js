import apiFetch from "@wordpress/api-fetch";

export const getOptionsField = (fieldName) => {
    if(!fieldName) return null;
    return apiFetch({ path: `/site-core/v1/options/?field=${fieldName}` })
}

export const getMarginClasses = (margin) => {
    const top = margin.top !== 'no' ? `mt-${margin.top}` : '';
    const right = margin.right !== 'no' ? ` mr-${margin.right}` : '';
    const bottom = margin.bottom !== 'no' ? ` mb-${margin.bottom}` : '';
    const left = margin.left !== 'no' ? ` ml-${margin.left}` : '';

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