export const generateRandomNumber = (): number => {
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomHex = (length: number): string => {
  let result = '';
  const characters = '0123456789abcdef';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
