/**
 * @param {String} path
 * @return {Boolean}
 */
export function isExternal(path): Boolean {
    return /^(https?:|mailto:|tel:)/.test(path);
}
