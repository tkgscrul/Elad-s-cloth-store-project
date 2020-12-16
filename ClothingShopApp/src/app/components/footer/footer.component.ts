import { Component, OnInit } from '@angular/core';
import { Newsletter } from 'src/app/class/newsletter';
import { StoreApiService } from 'src/app/service/store-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsLetterObj:any = {};
  any:number;
  constructor(private api:StoreApiService) { }

  submitNewsLetter(){
    debugger;
    this.api.postNewsletter(this.newsLetterObj).subscribe(
      data=>console.log(data),
      err=>console.log(err)
    )
    console.log(this.newsLetterObj)
  }
  ngOnInit(): void {
  }

}
