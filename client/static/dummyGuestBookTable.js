const dummyData = [
  {
    no: 1,
    guestName: "Michael Sihotang",
    phoneNumber: "08123456789",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 2,
    guestName: "Sarah Johnson",
    phoneNumber: "08543210987",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 1,
  },
  {
    no: 3,
    guestName: "John Smith",
    phoneNumber: "08876543210",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 3,
  },
  {
    no: 4,
    guestName: "Anna Lee",
    phoneNumber: "08123987654",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 5,
    guestName: "David Miller",
    phoneNumber: "08234567890",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 1,
  },
  {
    no: 6,
    guestName: "Emily Chen",
    phoneNumber: "08765432109",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 7,
    guestName: "Mohammed Ali",
    phoneNumber: "08123456780",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 8,
    guestName: "Maria Garcia",
    phoneNumber: "08654321098",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 3,
  },
  {
    no: 9,
    guestName: "Hannah Brown",
    phoneNumber: "08234567891",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 10,
    guestName: "Robert Johnson",
    phoneNumber: "08123987655",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 11,
    guestName: "Elena Petrova",
    phoneNumber: "08123456781",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 12,
    guestName: "Luca Rossi",
    phoneNumber: "08543210988",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 13,
    guestName: "Sophie Martin",
    phoneNumber: "08765432100",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 3,
  },
  {
    no: 14,
    guestName: "Javier Hernandez",
    phoneNumber: "08123987656",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 15,
    guestName: "Lily Wang",
    phoneNumber: "08234567892",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 16,
    guestName: "Antonio Gonzalez",
    phoneNumber: "08123456782",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 17,
    guestName: "Emma Johnson",
    phoneNumber: "08543210989",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 3,
  },
  {
    no: 18,
    guestName: "Daniel Kim",
    phoneNumber: "08765432101",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 19,
    guestName: "Olivia Smith",
    phoneNumber: "08123987657",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 20,
    guestName: "Isabella Martinez",
    phoneNumber: "08234567893",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 21,
    guestName: "Maximilian Fischer",
    phoneNumber: "08123456783",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 22,
    guestName: "Sophia Johnson",
    phoneNumber: "08543210990",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 1,
  },
  {
    no: 23,
    guestName: "Liam Wilson",
    phoneNumber: "08876543211",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 3,
  },
  {
    no: 24,
    guestName: "Ella Brown",
    phoneNumber: "08123987658",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 25,
    guestName: "Alexander Mueller",
    phoneNumber: "08234567894",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 1,
  },
  {
    no: 26,
    guestName: "Emma White",
    phoneNumber: "08765432102",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 27,
    guestName: "Muhammad Rahman",
    phoneNumber: "08123456784",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 28,
    guestName: "Ava Garcia",
    phoneNumber: "08654321099",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 3,
  },
  {
    no: 29,
    guestName: "Oliver Nguyen",
    phoneNumber: "08234567895",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 30,
    guestName: "Mia Taylor",
    phoneNumber: "08123987659",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 31,
    guestName: "Noah Kim",
    phoneNumber: "08123456785",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 32,
    guestName: "Sophie Rossi",
    phoneNumber: "08543210991",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 33,
    guestName: "Lucas Hernandez",
    phoneNumber: "08765432103",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 3,
  },
  {
    no: 34,
    guestName: "Aria Martin",
    phoneNumber: "08123987660",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 35,
    guestName: "William Brown",
    phoneNumber: "08234567896",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 36,
    guestName: "Eva Nguyen",
    phoneNumber: "08123456786",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 37,
    guestName: "James Rodriguez",
    phoneNumber: "08543210992",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 3,
  },
  {
    no: 38,
    guestName: "Charlotte Lee",
    phoneNumber: "08765432104",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 39,
    guestName: "Benjamin Martinez",
    phoneNumber: "08123987661",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 40,
    guestName: "Amelia Smith",
    phoneNumber: "08234567897",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 41,
    guestName: "Ethan Johnson",
    phoneNumber: "08123456787",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 42,
    guestName: "Zoe Wang",
    phoneNumber: "08543210993",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 43,
    guestName: "Mason Kim",
    phoneNumber: "08765432105",
    checkIn: true,
    gift: false,
    souvenir: false,
    totalGuest: 3,
  },
  {
    no: 44,
    guestName: "Harper Garcia",
    phoneNumber: "08123987662",
    checkIn: true,
    gift: true,
    souvenir: true,
    totalGuest: 2,
  },
  {
    no: 45,
    guestName: "Logan Nguyen",
    phoneNumber: "08234567898",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 1,
  },
  {
    no: 46,
    guestName: "Addison Brown",
    phoneNumber: "08123456788",
    checkIn: true,
    gift: true,
    souvenir: false,
    totalGuest: 2,
  },
  {
    no: 47,
    guestName: "Lucy Hernandez",
    phoneNumber: "08543210994",
    checkIn: true,
    gift: false,
    souvenir: true,
    totalGuest: 3,
  },
];

export default dummyData;
