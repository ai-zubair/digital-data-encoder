export const getRandomBit = ( stringLength: number ): string => {
  let randomString = ""
  for (let length = 0; length < stringLength; length++) {
    const randomBit = Math.floor(Math.random()*2);
    randomString+=randomBit;
  }
  return randomString;
}

export interface Attributes{
  [key: string]: string;
}

export const setAttributes = (element: HTMLElement, attr: Attributes) => {
  for (const attrName in attr) {
    element.setAttribute(attrName, attr[attrName]);
  }
}