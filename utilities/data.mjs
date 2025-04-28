const accounts = [
    {
      "accountNumber": "ACC001",
      "name": "John Doe",
      "branch": "Downtown",
      "balance": 1500.75,
      "email": "johndoe@example.com"
    },
    {
      "accountNumber": "ACC002",
      "name": "Jane Smith",
      "branch": "Midtown",
      "balance": 3200.50,
      "email": "janesmith@example.com"
    },
    {
      "accountNumber": "ACC003",
      "name": "Michael Johnson",
      "branch": "Uptown",
      "balance": 980.25,
      "email": "michaelj@example.com"
    },
    {
      "accountNumber": "ACC004",
      "name": "Alice Brown",
      "branch": "Eastside",
      "balance": 4025.00,
      "email": "aliceb@example.com"
    },
    {
      "accountNumber": "ACC005",
      "name": "Robert Davis",
      "branch": "Westside",
      "balance": 1200.00,
      "email": "robertd@example.com"
    },
    {
      "accountNumber": "ACC006",
      "name": "Emily Wilson",
      "branch": "Southside",
      "balance": 5400.25,
      "email": "emilyw@example.com"
    },
    {
      "accountNumber": "ACC007",
      "name": "David Lee",
      "branch": "Northside",
      "balance": 200.00,
      "email": "davidl@example.com"
    },
    {
      "accountNumber": "ACC008",
      "name": "Emma Garcia",
      "branch": "Suburban",
      "balance": 720.75,
      "email": "emmag@example.com"
    },
    {
      "accountNumber": "ACC009",
      "name": "Daniel Martinez",
      "branch": "Downtown",
      "balance": 1890.50,
      "email": "danielm@example.com"
    },
    {
      "accountNumber": "ACC010",
      "name": "Sophia Hernandez",
      "branch": "Midtown",
      "balance": 3020.00,
      "email": "sophiah@example.com"
    },
    {
      "accountNumber": "ACC011",
      "name": "James Lopez",
      "branch": "Uptown",
      "balance": 450.25,
      "email": "jamesl@example.com"
    },
    {
      "accountNumber": "ACC012",
      "name": "Olivia Clark",
      "branch": "Eastside",
      "balance": 3050.00,
      "email": "oliviac@example.com"
    },
    {
      "accountNumber": "ACC013",
      "name": "William Lewis",
      "branch": "Westside",
      "balance": 1580.00,
      "email": "williaml@example.com"
    },
    {
      "accountNumber": "ACC014",
      "name": "Ava Walker",
      "branch": "Southside",
      "balance": 4100.25,
      "email": "avaw@example.com"
    },
    {
      "accountNumber": "ACC015",
      "name": "Benjamin Hall",
      "branch": "Northside",
      "balance": 60.00,
      "email": "benjaminh@example.com"
    },
    {
      "accountNumber": "ACC016",
      "name": "Isabella Adams",
      "branch": "Suburban",
      "balance": 1120.75,
      "email": "isabellaa@example.com"
    },
    {
      "accountNumber": "ACC017",
      "name": "Elijah Young",
      "branch": "Downtown",
      "balance": 2920.50,
      "email": "elijahy@example.com"
    },
    {
      "accountNumber": "ACC018",
      "name": "Charlotte Scott",
      "branch": "Midtown",
      "balance": 3750.00,
      "email": "charlottes@example.com"
    }
  ];

const users= [
    {
      "name": "John Doe",
      "dob": "1990-05-15",
      "email": "johndoe@example.com"
    },
    {
      "name": "Jane Smith",
      "dob": "1985-09-22",
      "email": "janesmith@example.com"
    },
    {
      "name": "Michael Johnson",
      "dob": "1978-11-12",
      "email": "michaelj@example.com"
    },
    {
      "name": "Alice Brown",
      "dob": "1992-07-08",
      "email": "aliceb@example.com"
    },
    {
      "name": "Robert Davis",
      "dob": "1988-01-30",
      "email": "robertd@example.com"
    },
    {
      "name": "Emily Wilson",
      "dob": "1995-03-25",
      "email": "emilyw@example.com"
    },
    {
      "name": "David Lee",
      "dob": "1983-06-18",
      "email": "davidl@example.com"
    },
    {
      "name": "Emma Garcia",
      "dob": "1999-02-14",
      "email": "emmag@example.com"
    },
    {
      "name": "Daniel Martinez",
      "dob": "1991-04-10",
      "email": "danielm@example.com"
    },
    {
      "name": "Sophia Hernandez",
      "dob": "1987-08-21",
      "email": "sophiah@example.com"
    },
    {
      "name": "James Lopez",
      "dob": "1980-12-05",
      "email": "jamesl@example.com"
    },
    {
      "name": "Olivia Clark",
      "dob": "1996-10-11",
      "email": "oliviac@example.com"
    },
    {
      "name": "William Lewis",
      "dob": "1982-07-20",
      "email": "williaml@example.com"
    },
    {
      "name": "Ava Walker",
      "dob": "1994-11-09",
      "email": "avaw@example.com"
    },
    {
      "name": "Benjamin Hall",
      "dob": "1979-03-02",
      "email": "benjaminh@example.com"
    },
    {
      "name": "Isabella Adams",
      "dob": "1998-01-17",
      "email": "isabellaa@example.com"
    },
    {
      "name": "Elijah Young",
      "dob": "1993-09-04",
      "email": "elijahy@example.com"
    },
    {
      "name": "Charlotte Scott",
      "dob": "1986-05-27",
      "email": "charlottes@example.com"
    }
  ];
const withdraws = [
    {
      "accountNumber": "ACC001",
      "withdrawAmount": 200.50
    },
    {
      "accountNumber": "ACC002",
      "withdrawAmount": 500.00
    },
    {
      "accountNumber": "ACC003",
      "withdrawAmount": 150.75
    },
    {
      "accountNumber": "ACC004",
      "withdrawAmount": 1000.00
    },
    {
      "accountNumber": "ACC005",
      "withdrawAmount": 250.00
    },
    {
      "accountNumber": "ACC006",
      "withdrawAmount": 1200.75
    },
    {
      "accountNumber": "ACC007",
      "withdrawAmount": 50.00
    },
    {
      "accountNumber": "ACC008",
      "withdrawAmount": 300.00
    },
    {
      "accountNumber": "ACC009",
      "withdrawAmount": 400.25
    },
    {
      "accountNumber": "ACC010",
      "withdrawAmount": 900.00
    },
    {
      "accountNumber": "ACC011",
      "withdrawAmount": 120.50
    },
    {
      "accountNumber": "ACC012",
      "withdrawAmount": 600.75
    },
    {
      "accountNumber": "ACC013",
      "withdrawAmount": 750.00
    },
    {
      "accountNumber": "ACC014",
      "withdrawAmount": 950.25
    },
    {
      "accountNumber": "ACC015",
      "withdrawAmount": 30.00
    },
    {
      "accountNumber": "ACC016",
      "withdrawAmount": 220.50
    },
    {
      "accountNumber": "ACC017",
      "withdrawAmount": 800.25
    },
    {
      "accountNumber": "ACC018",
      "withdrawAmount": 1000.00
    }
  ];

export default {accounts,users,withdraws}