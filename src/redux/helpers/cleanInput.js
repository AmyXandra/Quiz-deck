export const cleanInput = (data) => {
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)){
            if (data[key] === null || data[key] === '') {
                delete data[key];
            }
        }
    }

    return true;
}