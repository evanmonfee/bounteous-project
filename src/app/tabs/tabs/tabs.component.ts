import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  title = "Bounteous Assignment - Tabs";

  tabList = [
    { title: "Tab List 1", active: true },
    { title: "Tab List 2", active: false },
    { title: "Tab List 3", active: false },
    { title: "Tab List 4", active: false },
    { title: "Tab List 5", active: false },
  ]

  constructor() { }

  ngOnInit(): void {
    
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
