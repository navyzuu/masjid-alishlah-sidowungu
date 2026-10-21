export interface PrayerTimes {
  imsak: string;
  subuh: string;
  subuhOriginal?: string;
  terbit: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}

export interface PrayerDateInfo {
  gregorianDate: string; // e.g., "Rabu, 21 Oktober 2026"
  hijriDate: string; // e.g., "10 Jumadil Awwal 1448 H"
  dayName: string;
}

export interface NextPrayerInfo {
  name: string;
  time: string;
  remainingSeconds: number;
  remainingText: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  speaker: string;
  category: 'Kajian Ahad' | 'Aisyiyah' | 'Pemuda' | 'TPQ' | 'Umum';
  day: string;
  time: string;
  location: string;
  description: string;
  badge: string;
}

export interface KasReport {
  period: string;
  saldoAwal: number;
  pemasukan: number;
  pengeluaran: number;
  saldoAkhir: number;
  lastUpdated: string;
  items: {
    id: string;
    date: string;
    description: string;
    category: 'infaq_jumat' | 'kotak_amal' | 'operasional' | 'santunan' | 'pemeliharaan';
    type: 'in' | 'out';
    amount: number;
  }[];
}

export interface FacilityItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  seniorFriendlyNote?: string;
  tag: string;
}

export interface TakmirMember {
  id: string;
  name: string;
  role: string;
  division: string;
  phone?: string;
}
