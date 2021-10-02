import { Component } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pictureList: any = [];
  loading: any;
  private scrollDepthTriggered = false;
  constructor(private pictureService: PictureService,public loadingController: LoadingController, private router: Router) {}
  ionViewWillEnter() {
    this.getData();
  }
  async getData() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });

    await this.loading.present();
    this.pictureService.getPictureList()
    .subscribe((res: any) => {
      this.pictureList = res.pugs;
      this.hideLoading();
    });
  }

  hideLoading() {
    this.loading.dismiss();
  }
  tapImage(item) {
    this.router.navigate(['/details-page'], { queryParams: { img: item }});
  }
}
