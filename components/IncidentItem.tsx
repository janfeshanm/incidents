import { formatDate, Incident } from "@/lib/utils";
import { Image, ImageProps, Text } from 'react-native';

function IncidentItem({ incident, locationRecord, priorityMapImage, priorityMapTitle }: { incident: Incident; locationRecord: Record<string, string>; priorityMapImage: Record<number, ImageProps>; priorityMapTitle: Record<number, string>; }) {
  return (
    <li className='incident-item' key={incident.id}>
      <div><Text style={{ verticalAlign: 'middle'}}><Image style={{ margin: 5}} source={priorityMapImage[incident.priority]} />{formatDate(new Date(incident.datetime), 'DD/MM/YYYY, HH:mm:ss')}</Text></div>
      <div><Text  testID={"ID"+incident.id}>{incident.name}</Text></div>
      <div><Text>{priorityMapTitle[incident.priority]}</Text></div>
      <div><Text>{locationRecord[incident.locationId]}</Text></div>
    </li>
  );
}

export default IncidentItem;