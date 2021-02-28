/// <reference path="../util/helperClass.ts" />

class SampleClass2 {
    private privVar1: string;
    private privVar2: string;

    constructor(var1: string, var2: string) {
        this.privVar1 = var1;
        this.privVar2 = var2;
    }

    printToConsole() {
        console.log('privVar1: ' + this.privVar1);
        console.log('privVar2: ' + this.privVar2);
    }
}

const sampleObject2 = new SampleClass2("2nd Class 1st value", "2nd Class 2nd value");
sampleObject2.printToConsole();

TWG_TS.HelperClass.printMessageToConsole("Helper message from 2nd Class file");