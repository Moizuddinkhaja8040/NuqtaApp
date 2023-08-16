import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuranData,SurahsDataApiResponse } from '../quran/quran.model';

@Injectable({
  providedIn: 'root'
})
export class QuranService {
  private apiUrl = 'https://api.alquran.cloud/v1/surah';

  constructor(private http: HttpClient) { }

  getSurahData(number: number): Observable<QuranData> {
    const url = `${this.apiUrl}/${number}/ar.alafasy`;
    return this.http.get<QuranData>(url);
  }

  getAllSurahData(): Observable<SurahsDataApiResponse> {
    const url = `https://api.alquran.cloud/v1/meta`;
    return this.http.get<SurahsDataApiResponse>(url);
  }
}
