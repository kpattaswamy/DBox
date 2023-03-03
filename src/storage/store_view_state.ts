// Global key for accessing view state
const VIEW_STATE_KEY = 'viewState';

export class ViewStateStorage {
    static putViewState(value:string){
        // This function adds the key:value => VIEW_STATE_KEY:'ui state' to storage

        chrome.storage.local.set({ [VIEW_STATE_KEY]: value });
    }
    
    static getViewState(onGetStorageKeyValue:(s:string)=>void){
        // This function gets the stored view state from chrome's storage
        // The param is a function which sets the state, it acts like call back

        chrome.storage.local.get([VIEW_STATE_KEY], function(result) {
           onGetStorageKeyValue(result[VIEW_STATE_KEY]);
        });
    }

    static removeViewState(onGetStorageKeyValue:()=>void){
        // This function removes view state from chrome's storage

        chrome.storage.local.remove([VIEW_STATE_KEY], function() {
            onGetStorageKeyValue();
        });
    }
}
