import { Component, Input, OnInit } from '@angular/core';
import { PageModel } from './../page.data.model'

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit {

  @Input() pageTitle: string = "Page";
  pageModel: PageModel = new PageModel();

  constructor() { }

  ngOnInit(): void {
    this.getStorageData();
  }

  /**
   * Read the localstorage to fetch the temporarily saved data, if available.
   */
  getStorageData() {
    let data = localStorage.getItem(this.pageTitle);
    if (data != null) {
      this.pageModel.enteredText = data;
    }
  }

  /**
   * Update local storage with the new values.
   */
  updatePage() {
    localStorage.setItem(this.pageTitle, this.pageModel.enteredText);
  }

  /**
   * Reset the form to defaults.
   */
  reset() {
    this.pageModel.setDefaults();
    this.updatePage();
  }

}
