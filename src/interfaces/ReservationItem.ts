export default interface IReservationItem {
  id: number;
  id_area?: number;
  cover: string;
  title: string;
  dates?: string[];
  datereserved?: string;
}
