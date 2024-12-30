export interface Popup
{
  text: string,
  type: string,
  time: number,
  visibility: boolean,
  action?: () => void;
}
