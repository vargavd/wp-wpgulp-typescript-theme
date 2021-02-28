/// <reference path="../util/helperClass.ts" />

class SampleClass1 {
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

const sampleObject1 = new SampleClass1("1st class 1st value 1", "1st class 2nd value");
sampleObject1.printToConsole();

TWG_TS.HelperClass.printMessageToConsole("Helper message from 1st class file");