export interface IActivityDetailsCardProps {
  activityDetails: IActivityResponse;
}

export interface IActivityResponse {
  activityName: string;
  type: string;
  participants: number;
  price: number;
  key: string;
  accessibility: number;
}
