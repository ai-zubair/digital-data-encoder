export const getRandomBit = ( stringLength: number ): string => {
  let randomString = ""
  for (let length = 0; length < stringLength; length++) {
    const randomBit = Math.floor(Math.random()*2);
    randomString+=randomBit;
  }
  return randomString;
}

export enum Events{
  ActiveComponentChange = "active-component-change",
}