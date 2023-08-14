import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { QuranService} from '../services/quran.service';
import {QuranData} from './quran.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.less']
})
export class QuranComponent implements OnInit,OnChanges {
  quranData: QuranData | null = null;
  surahNumber:number = 1;
  @Input() surahNum:number=1;
  @Input() option:number=1;
  

  constructor(private quranService: QuranService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
   // const surahNumber = 112;
/*    console.log('NC ngOnInit')
   this.route.queryParams.subscribe((params: Params) => {
    this.surahNumber = Number(params['id']);
  }); */

  
  }
  ngOnChanges():void{
    console.log('NC ngOnChanges');
    
    this.quranService.getSurahData(this.surahNum)
    .subscribe(data => {
      this.quranData = data;
    });
  }

 
}
