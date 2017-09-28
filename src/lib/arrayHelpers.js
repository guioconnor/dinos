export const randomise = arr => arr.slice(0).sort(() => 0.5 - Math.random());

export const head = (arr, n) => arr.slice(0, n);

export const tail = (arr, n) => arr.slice(arr.length - n, arr.length);
