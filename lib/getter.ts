/* eslint-disable @typescript-eslint/no-explicit-any */
export function getValueByPath<T>(
    object: Record<any, any>,
    path: (string | number)[] | string,
    defaultValue?: T,
): T {
    if (typeof path === "string") {
        path = path.split(".").map((key) => {
            const numKey = Number(key);
            return isNaN(numKey) ? key : numKey;
        });
    }
    let result = object;
    for (const key of path) {
        if (result === void 0 || result === null) {
            return defaultValue!;
        }
        result = result[key];
    }
    return result !== void 0 ? result : defaultValue!;
}
