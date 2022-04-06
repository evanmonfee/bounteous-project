/**
 * Model object for the tab.
 */
export class TabsModel{

    newFruit: string = '';
    fruitList: string[];

    constructor(){
        this.setDefaultList();
    }

    /**
     * Load the fruit list with initial placeholder values. One place change.
     */
    setDefaultList(){
        this.fruitList = [
            'Apple',
            'Orange',
            'Mango'
          ];
    }

    /**
     * Invoked to reset the form elements to the defaults.
     */
    clear(){
        this.newFruit = '';
        this.setDefaultList();
    }
}