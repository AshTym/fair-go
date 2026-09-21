export type Profile = {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  intent: string;
  bio: string;
  answer: string;
  interests: string[];
  verified: boolean;
  trust: number;
  photo: string;
  initials: string;
};

const names = [
  'Amelia', 'Noah', 'Charlotte', 'Oliver', 'Mia', 'Jack', 'Isla', 'Henry',
  'Ava', 'Leo', 'Matilda', 'Thomas', 'Grace', 'William', 'Zoe', 'Lachlan',
  'Ruby', 'Ethan', 'Evie', 'Harrison', 'Sophie', 'Max', 'Harper', 'Archie',
  'Chloe', 'Finn', 'Ella', 'Samuel', 'Lucy', 'Oscar', 'Maya', 'Ben',
  'Freya', 'Daniel', 'Georgia', 'Alex', 'Nina', 'Jordan', 'Tahlia', 'Riley',
  'Priya', 'Marcus', 'Hannah', 'Kai', 'Sienna', 'Tom', 'Aisha', 'James',
  'Lily', 'Callum',
];

const canberraLocations = [
  'Braddon', 'Kingston', 'Belconnen', 'Gungahlin', 'Dickson', 'Manuka',
  'Woden', 'Griffith', 'Turner', 'Lyneham', 'Narrabundah', 'Campbell',
  'Watson', 'Yarralumla', 'Weston Creek', 'Queanbeyan',
];

const waggaLocations = [
  'Central Wagga', 'Lake Albert', 'Kooringal', 'Turvey Park', 'Glenfield Park',
  'Estella', 'Gobbagombalin', 'Tatton', 'Bourkelands', 'Tolland', 'Ashmont',
  'Forest Hill', 'Springvale', 'North Wagga', 'Mount Austin', 'Kapooka',
];

const intents = [
  'Long-term, open-hearted',
  'Something real',
  'Meet and see',
  'A genuine connection',
];

const bios = [
  'Big on weekend markets, long walks, and cooking enough food for everyone.',
  'Equal parts outdoorsy and happy-at-home. Looking for kindness, curiosity, and good conversation.',
  'Local coffee regular, amateur gardener, and always planning the next day trip.',
  'I work hard, laugh easily, and think the best dates involve somewhere you can actually talk.',
  'Usually found near live music, a walking track, or making an overly ambitious Sunday dinner.',
  'A calm person with a busy playlist. Here to meet someone genuine and see where it goes.',
  'Country drives, city dinners, and a soft spot for dogs with too much personality.',
  'I value honesty, family, and people who can find the funny side without being unkind.',
];

const answers = [
  'My ideal Sunday starts slowly, includes a good coffee, and ends with dinner shared around a table.',
  'The greenest flag is someone who says what they mean and makes room for other people.',
  'I will always stop for a country bakery, a lookout, or a dog that wants to say hello.',
  'A small thing I love is the first warm evening when everyone stays outside a little longer.',
  'The quickest way to win me over is curiosity, consistency, and not taking yourself too seriously.',
  'My perfect local date is a walk by the water followed by somewhere relaxed for a drink.',
];

const interestSets = [
  ['Markets', 'Cooking', 'Live music'],
  ['Hiking', 'Coffee', 'Road trips'],
  ['Dogs', 'Gardening', 'Podcasts'],
  ['Cinema', 'Good food', 'Weekends away'],
  ['Running', 'Books', 'Local pubs'],
  ['Camping', 'Photography', 'Brunch'],
  ['Art', 'Baking', 'Nature'],
  ['Fitness', 'Travel', 'Family'],
];

function createProfile(index: number): Profile {
  const isCanberra = index < 100;
  const localIndex = index % 100;
  const locations = isCanberra ? canberraLocations : waggaLocations;
  const name = names[(index * 7 + Math.floor(index / 9)) % names.length];
  const age = 23 + ((index * 11) % 27);
  const distanceKm = 1 + ((localIndex * 7 + Math.floor(localIndex / 4)) % 20);
  const photoNumber = index + 1;

  return {
    id: `${isCanberra ? 'canberra' : 'wagga'}-${String(localIndex + 1).padStart(3, '0')}`,
    name,
    age,
    location: `${locations[localIndex % locations.length]}, ${isCanberra ? 'ACT' : 'NSW'}`,
    distance: `${distanceKm} km away`,
    intent: intents[index % intents.length],
    bio: bios[(index * 3) % bios.length],
    answer: answers[(index * 5) % answers.length],
    interests: interestSets[(index * 7) % interestSets.length],
    verified: index % 5 !== 0,
    trust: 76 + ((index * 7) % 23),
    photo: `profiles/portrait-${String(photoNumber).padStart(3, '0')}.jpg`,
    initials: name.slice(0, 1),
  };
}

export const profiles: Profile[] = Array.from({ length: 200 }, (_, index) =>
  createProfile(index),
);
