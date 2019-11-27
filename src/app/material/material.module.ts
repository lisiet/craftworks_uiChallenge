import { NgModule } from '@angular/core';
import {MatListModule, MatFormFieldModule,
    MatButtonModule, MatInputModule, MatNativeDateModule,
    MatDatepickerModule, MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';
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
// The aim of this module is to import and export material components
@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule {
}
