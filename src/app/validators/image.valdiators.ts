import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImageValidators{
    static isValidExtension(control: AbstractControl) : ValidationErrors | null{
        let v = control.value as string;

        if(v.endsWith(".jpg") || v.endsWith(".jpeg") || v.endsWith(".png")){
            return null;
        }

        return {
            wrongExtension: true
        }
    }
}