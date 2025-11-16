import { useEffect, useState } from 'react';
import { ImageProps, useWindowDimensions } from 'react-native';

import { Incident, Location } from '@/lib/utils';
import IncidentItem from '../components/IncidentItem';
import fakeApi from '../lib/fake-api';


const priorityMapImage: Record<number, ImageProps> = {
  1: require('../assets/img/alarm-high.svg'),
  2: require('../assets/img/alarm-medium.svg'),
  3: require('../assets/img/alarm-low.svg'),
};

const priorityMapTitle: Record<number, string> = {
  1: 'High',
  2: 'Medium',
  3: 'Low',
};

const locationRecord: Record<string, string> = {};

export default function Index() {
  const [ airportIncidents, setAirportIncidents ] = useState<Incident[]>([]);

  useEffect(() => {
    fakeApi.getIncidentsByLocationId('airport').then((data:Incident[]) => {
      data.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
      data.sort((a, b) => a.priority - b.priority);
      setAirportIncidents(data);
    });
    fakeApi.getLocations().then((data:Location[]) => {
      data.forEach((location: Location) => {
        locationRecord[location.id] = location.name;
      });
    });
  }, []);

  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  const listIncidents = airportIncidents.map(incident => <IncidentItem key={incident.id} incident={incident} locationRecord={locationRecord} priorityMapImage={priorityMapImage} priorityMapTitle={priorityMapTitle} />);
  return (
      <ul className='incident-list'>
    { isLargeScreen ? (<li className='incident-item'><div style={{paddingLeft: 35}}>Date and Time</div><div>Name</div><div>Priority</div><div>Location</div></li>): null }
    { listIncidents }</ul>
  
  );
}

