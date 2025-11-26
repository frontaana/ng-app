export interface Domain {
  id: number;
  domain: string;
  monitoring: boolean;
  price: string;
  provider: string;
  customSsl: boolean;
  sslExpire?: string;
}
