export function isEmailValid(email: string): boolean {
  // see https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  // eslint-disable-next-line no-control-regex
  return /^(?:[a-z0-9!#$%&'*/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email,
  );
}

export const isSuffixValid = (emailSuffix: string): boolean => {
  return /^[a-z0-9]+$/i.test(emailSuffix);
};
export const getEmailBase = (email: string): string => {
  return email.split("@")[0];
};
export const getEmailDomain = (email: string): string => {
  return email.split("@")[1];
};

export const composeLocalPart = (base: string, suffix: string): string => {
  return `${base}+${suffix}`;
};
