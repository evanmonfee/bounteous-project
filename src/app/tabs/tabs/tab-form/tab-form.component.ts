import { Component, Input, OnInit } from '@angular/core';
import {TabsModel} from './../tabs.data.model'

@Component({
  selector: 'app-tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.scss']
})
export class TabInnerComponent implements OnInit {

  // Default fallback assignment for the input
  @Input() tabName: string = "Tab";

  model: TabsModel = new TabsModel();

  constructor() { }

  ngOnInit(): void {
    this.getStorageData();
  }

  /**
   * Read the localstorage to fetch the temporarily saved data, if available.
   */
  getStorageData(){
    let data = localStorage.getItem(this.tabName);
    if(data != null){
      this.model.fruitList = JSON.parse(data);
    }
  }

  /**
   * Add the new entered fruit to the list of fruits.
   */
  onAddClick(){
    if(this.model.newFruit){
      this.model.fruitList.push(this.model.newFruit);
      this.model.newFruit = '';
    }
    this.updateStorage();
    
  }

  /**
   * Update local storage with the new values.
   */
  updateStorage(){
    localStorage.setItem(this.tabName, JSON.stringify(this.model.fruitList));

  }

  /**
   * Restore form values to the defaults.
   */
  resetList(){
    this.model.clear();
    this.updateStorage();
  }

}
