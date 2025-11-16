import { formatDate, Incident, Location } from "@/lib/utils";

describe('Utils', () => {
    test('Test formatDate 12:00 PM', () => {
        expect(formatDate(new Date('2023-12-31T12:00:00'), 'YYYY-MM-DD HH:mm:ss')).toBe('2023-12-31 12:00:00 PM');
    });
    test('Check Converting to local time(Sydney)', () => {
        expect(formatDate(new Date('2018-01-22T11:25:18.000Z'), 'YYYY-MM-DD HH:mm:ss')).toBe('2018-01-22 10:25:18 PM');
    });
    test('Test Desired Time Format', () => {
        expect(formatDate(new Date('2018-01-22T11:25:18.000Z'), 'DD/MM/YYYY, HH:mm:ss')).toBe('22/01/2018, 10:25:18 PM');
    });
});

describe('Interfaces', () => {
    test('Test Incident Interface', () => {
        const incident: Incident = {
            name: 'Fire',
            id: 5,
            datetime: '2018-01-22T11:25:18.000Z',
            priority: 1,
            locationId: 'airport/t2'
        };
        expect(incident).toBeTruthy();
    });
    test('Test Location Interface', () => {
        const location: Location = { name: 'T2', id: 'airport/t2' };
        expect(location).toBeTruthy();
    });
});