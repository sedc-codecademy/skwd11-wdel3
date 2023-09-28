import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    constructor(){}

    logAction = (acttion: string): void => {
        console.log(`Action occurred: ${acttion}`);
    };

    logError = (error: string): void => {
        console.log(`Error occurred: ${error}`);
    };
}