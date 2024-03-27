// Task 2 : A multi pick up and drop shipment is to be divided into multiple trips, mention the logic
//  to figure out of the given list of trips are legit and fulfils the shipment with typescript.
//  (Please note:  A shipment can have multiple pick up points and drop points, and a trip can also
//     have multiple pick up points , drop points and an additional option of a warehouse a via point.)
// Example:
// For a shipment with Pick ups : (A, B), Drop points (C,D),
// a) Valid set of trips are :  Trip 1: (A,W), Trip 2: (B, W), Trip 3: (W,C), Trip 4: (W, D).
// b) Invalid set of trips are : Trip 1: (A,W1), Trip 2: (B, W2), Trip 3: (W3,C), Trip 4: (W4, D).

// a) Mention the logic to figure out legit and valid trips.
// b) List down the assumptions made in the logic, if any
// c) Typescript code for the logic (It can be a GitHub link)

// if first point is not pickup or last point is not drop, then it is invalid.
// If a pickup point or drop point is visited more than once, then it is invalid.
// If any one pickup or drop point is visited more than once, then it is invalid trip.
// Also if there are more than one warehouse, then also it is invalid.

// Assumptions:
// - All pickups and dropoffs must be visited
// - No dropoffs at pickup points and vice versa
// - User can do multiple dropoff after single pickup
// - First should be pickup and last should be dropoff
// - Only one warehouse can be used

function validateTrips(
    pickups: string[],
    dropoffs: string[],
    trips: [string, string][]
): boolean {
    const visitedPickups = new Set<string>();
    const visitedDropoffs = new Set<string>();
    let warehouse = '';

    trips.map(([start, end], index) => {
        if (index == 0 && !pickups.includes(start)) {
            console.log('First point is not Pickup Point.');
            return false;
        }
        if (index == trips.length - 1 && !dropoffs.includes(end)) {
            console.log('Last point is not Drop Point.');
            return false;
        }
        if (!dropoffs.includes(end) && warehouse == '') {
            warehouse = end;
        }
        if (!pickups.includes(start) && start != warehouse) {
            console.log('Invalid Start Point.');
            return false;
        }
        if (!dropoffs.includes(end) && end != warehouse) {
            console.log('Invalid End Point.');
            return false;
        }
        // Checking Drop Point is already visited or not
        if (end != warehouse && !visitedDropoffs.has(end)) {
            visitedDropoffs.add(end);
        } else if (end != warehouse) {
            console.log(Array.from(visitedDropoffs) + ' ' + end);
            console.log('Dropoff Point already Visited.');
            return false;
        }
        // Checking Pickup Point is already visited or not
        if (start != warehouse && !visitedPickups.has(start)) {
            visitedPickups.add(start);
        } else if (start != warehouse) {
            console.log(Array.from(visitedPickups) + ' ' + start);
            console.log('Pickup Point already Visited.');
            return false;
        }
    });
    if (
        visitedPickups.size !== pickups.length ||
        visitedDropoffs.size !== dropoffs.length
    ) {
        console.log('Some Pickup OR drop point is not visited.');
        return false;
    }
    return true;
}

const pickups = ['A', 'B'];
const dropoffs = ['C', 'D'];
const trips: [string, string][] = [
    ['A', 'W'],
    ['B', 'W1'],
    ['W', 'C'],
    ['W', 'D'],
];

const isValid = validateTrips(pickups, dropoffs, trips);
console.log(isValid);
