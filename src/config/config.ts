export interface Config {
  username: string;
  password: string;
  firstName: string;
}

export const config: Config = {
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  firstName: process.env.FIRST_NAME || '',
};
