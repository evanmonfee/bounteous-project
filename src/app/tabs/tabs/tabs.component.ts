import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  title = "Bounteous Assignment - Notebook";

  tabList = [
    { title: "Page 1", active: true },
    { title: "Page 2", active: false },
    { title: "Page 3", active: false },
    { title: "Page 4", active: false },
    { title: "Page 5", active: false },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  /**
   * Navigate across the pages
   * @param selectedPage - the currently selected page index passed from the view.
   */
  onPageChange(selectedPage){
    this.tabList.forEach(
      (item) =>{
        item.active = false;
      }
    );
    selectedPage.active = true;
  }

  /**
   * Toggle between various tabs.
   * @param selectedTab - the currently selected tab index passed from the view.
   */
  onTabChange(selectedTab) {
    this.tabList.forEach(tab => {
      tab.active = false;
    });
    selectedTab.active = true;
  }


}
