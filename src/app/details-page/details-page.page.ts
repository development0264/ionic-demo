import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {
  image: any;
  constructor(private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((params) => {
        this.image = {...params };
      }
    );
  }
}
