/**
 * Model object for the tab.
 */
export class PageModel{

    enteredText: string = '';

    constructor(){
        this.setDefaults();
    }

    /**
     * Load the fruit list with initial placeholder values. One place change.
     */
    setDefaults(){
        this.enteredText = "";
    }

    /**
     * Invoked to reset the form elements to the defaults.
     */
    clear(){
        this.setDefaults();
    }
}