const happy = require('../../assets/moods/happy.png');

const diaryEntries = [
  {
    id: 1,
    mood: 'tenang',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini bangun lebih pagi, minum teh hangat, dan menikmati suasana yang tenang sebelum berangkat.',
    moodUri: 'https://picsum.photos/seed/tenang/128',
  },
  {
    id: 2,
    mood: 'produktif',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Banyak tugas selesai hari ini. Praktikum lancar dan sempat diskusi dengan teman sekelas.',
    moodUri: 'https://picsum.photos/seed/produktif/128',
  },
  {
    id: 3,
    mood: 'senja',
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Sore hari duduk di taman melihat langit berubah warna sambil menulis rencana minggu depan.',
    moodUri: 'https://picsum.photos/seed/senja/128',
  },
  {
    id: 4,
    mood: 'senang',
    title: 'Ngopi Bareng Teman',
    date: '2025-10-03',
    preview: 'Ketemu teman lama di kafe dekat kampus. Ngobrol panjang dan tertawa sampai lupa waktu.',
    moodImage: happy, // gambar lokal dari assets/moods
  },
  {
    id: 5,
    mood: 'sedih',
    title: 'Hujan Sore Hari',
    date: '2025-10-02',
    preview: 'Hujan deras dari siang dan rencana keluar batal. Hari yang agak murung, tapi tetap ada waktu istirahat.',
    moodUri: 'https://picsum.photos/seed/hujan/128',
  },
];

export default diaryEntries;