export interface QuranData {
    code: number;
    status: string;
    data: {
      number: number;
      name: string;
      englishName: string;
      englishNameTranslation: string;
      revelationType: string;
      numberOfAyahs: number;
      ayahs: Ayah[];
      edition: Edition;
    };
  }
  
  interface Ayah {
    number: number;
    audio: string;
    audioSecondary: string[];
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
  }
  
  interface Edition {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
    direction: string | null;
  }
  

  export interface Reference {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  }
  
  export interface SurahsData {
    count: number;
    references: Reference[];
  }
  
  export interface SurahsDataApiResponse {
    code: number;
    status: string;
    data: {
      surahs: SurahsData;
    };
  }
  