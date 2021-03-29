import IProperty from './Property';

export default interface IUser {
  id: number;
  admin: number;
  name: string;
  email: string;
  cpf: string;
  properties: IProperty[];
}
