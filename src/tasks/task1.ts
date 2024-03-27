// Task 1 : You have 3 timestamps for list of users along with
// the device details : logged_in, logged_out, and lastSeenAt
// (for the device during the log in period).
// Please note: Users can log in from multiple devices, users
// are generally logged in for a longer duration of time 6
// months or so.

interface User {
    logged_in: Date;
    logged_out: Date | null;
    lastSeenAt: Date;
    deviceId: string;
}

const users: User[][] = [
    [
        {
            logged_in: new Date('2024-01-01'),
            logged_out: new Date('2024-01-15'),
            lastSeenAt: new Date('2024-01-10'),
            deviceId: '00',
        },
        {
            logged_in: new Date('2024-01-01'),
            logged_out: new Date('2024-01-15'),
            lastSeenAt: new Date('2024-01-10'),
            deviceId: '01',
        },
        {
            logged_in: new Date('2024-01-01'),
            logged_out: new Date('2024-01-15'),
            lastSeenAt: new Date('2024-01-10'),
            deviceId: '02',
        },
    ],
    [
        {
            logged_in: new Date('2024-03-01'),
            logged_out: new Date('2024-01-15'),
            lastSeenAt: new Date('2024-03-19'),
            deviceId: '11',
        },
        {
            logged_in: new Date('2024-03-01'),
            logged_out: new Date('2024-01-15'),
            lastSeenAt: new Date('2024-03-21'),
            deviceId: '11',
        },
    ],
    [
        {
            logged_in: new Date('2024-03-11'),
            logged_out: null,
            lastSeenAt: new Date('2024-03-11'),
            deviceId: '20',
        },
    ],
];

function calculateMonthlyLoggedInAndActiveUsers(users: User[][]): void {
    let monthlyLoggedInUsers = 0;
    let monthlyActiveUsers = 0;

    for (const user of users) {
        let userIsCountedMonthly = false;
        let userIsCountedActive = false;
        user.map((device) => {
            if (
                (device.logged_out && device.logged_in > device.logged_out) ||
                (device.logged_out === null && device.logged_in !== null)
            ) {
                if (!userIsCountedMonthly) {
                    monthlyLoggedInUsers++;
                    userIsCountedMonthly = true;
                    // to prevent user from being counted multiple times due to multiple devices
                }
                const thirtydays = new Date();
                // getting 30 days before date to check the active users in that month
                thirtydays.setDate(thirtydays.getDate() - 30);
                // if user last seen in last 30 days, then he is active user
                if (device.lastSeenAt.getTime() >= thirtydays.getTime()) {
                    if (!userIsCountedActive) {
                        monthlyActiveUsers++;
                        userIsCountedActive = true;
                        // to prevent user from being counted multiple times due to multiple devices
                    }
                }
            }
        });
    }
    console.log(`Monthly logged-in users: ${monthlyLoggedInUsers}`);
    console.log(`Monthly active users: ${monthlyActiveUsers}`);
}

calculateMonthlyLoggedInAndActiveUsers(users);
