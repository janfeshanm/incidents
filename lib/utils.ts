export interface Incident {
  name: string;
  id: number;
  priority: number;
  datetime: string;
  locationId: string;
}

export interface Location {
  id: string;
  name: string;
}

export function formatDate(date: Date, format: string) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  let AMPM = 'AM';
  if(date.getHours() >= 12){
    if(date.getHours() > 12)date.setHours(date.getHours() - 12);
    AMPM = 'PM';
  }
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Replace tokens with actual values
  const result = format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds) + ` ${AMPM}`;

  return result;
}