"use strict";
var SampleClass2 = (function () {
    function SampleClass2(var1, var2) {
        this.privVar1 = var1;
        this.privVar2 = var2;
    }
    SampleClass2.prototype.printToConsole = function () {
        console.log('privVar1: ' + this.privVar1);
        console.log('privVar2: ' + this.privVar2);
    };
    return SampleClass2;
}());
var sampleObject2 = new SampleClass2("2nd Class 1st value", "2nd Class 2nd value");
sampleObject2.printToConsole();
TWG_TS.HelperClass.printMessageToConsole("Helper message from 2nd Class file");

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcjIvc2FtcGxlLWNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUlJLHNCQUFZLElBQVksRUFBRSxJQUFZO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQUVELElBQU0sYUFBYSxHQUFHLElBQUksWUFBWSxDQUFDLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDckYsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyIsImZpbGUiOiJkaXIyL3NhbXBsZS1jbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsL2hlbHBlckNsYXNzLnRzXCIgLz5cclxuXHJcbmNsYXNzIFNhbXBsZUNsYXNzMiB7XHJcbiAgICBwcml2YXRlIHByaXZWYXIxOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByaXZWYXIyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFyMTogc3RyaW5nLCB2YXIyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnByaXZWYXIxID0gdmFyMTtcclxuICAgICAgICB0aGlzLnByaXZWYXIyID0gdmFyMjtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFRvQ29uc29sZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpdlZhcjE6ICcgKyB0aGlzLnByaXZWYXIxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpdlZhcjI6ICcgKyB0aGlzLnByaXZWYXIyKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2FtcGxlT2JqZWN0MiA9IG5ldyBTYW1wbGVDbGFzczIoXCIybmQgQ2xhc3MgMXN0IHZhbHVlXCIsIFwiMm5kIENsYXNzIDJuZCB2YWx1ZVwiKTtcclxuc2FtcGxlT2JqZWN0Mi5wcmludFRvQ29uc29sZSgpO1xyXG5cclxuVFdHX1RTLkhlbHBlckNsYXNzLnByaW50TWVzc2FnZVRvQ29uc29sZShcIkhlbHBlciBtZXNzYWdlIGZyb20gMm5kIENsYXNzIGZpbGVcIik7Il0sInNvdXJjZVJvb3QiOiIvd3AtY29udGVudC90aGVtZXMvc3RiYXNlL2Fzc2V0cy90cy8ifQ==
