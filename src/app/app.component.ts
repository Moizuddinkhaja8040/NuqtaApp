import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuranService } from './services/quran.service';
import { Reference } from './quran/quran.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'quran-app';
  allSurah:Reference[] | null = null;
  surahNumber:number =1;
  public selectedOption:number=1;
  allAlphabets = [0x0623, 0x0628, 0x062A, 0x062B, 0x062C, 0x062D, 0x062E, 0x062F, 0x0630, 0x0631,
    0x0632, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638, 0x0639, 0x063A, 0x0641,
    0x0642, 0x0643, 0x0644, 0x0645, 0x0646, 0x0647, 0x0648, 0x064A]



  constructor(private router: Router,private quranService: QuranService) {}
  ngOnInit(): void {
    this.quranService.getAllSurahData()
    .subscribe(data => {
      this.allSurah = data.data.surahs.references;
    });
  }
  navigateToProductDetails(surahNumber: number): void {
    this.surahNumber = surahNumber;
  }

   onColorChange(){
    console.log('NC selectedOption = ', this.selectedOption);
   }
  
   getCharacter(char:number):string{
    return String.fromCodePoint(char);
   }
}
