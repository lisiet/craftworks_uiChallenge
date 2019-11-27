import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {
    MatButtonModule, MatSelectionList, MatInputModule, MatNativeDateModule,
    MatDatepickerModule, MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';


const MaterialComponents = [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule,
    TextFieldModule
];

// Aim of this module is to import and export material components

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
