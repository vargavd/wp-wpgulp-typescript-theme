"use strict";
var SampleClass1 = (function () {
    function SampleClass1(var1, var2) {
        this.privVar1 = var1;
        this.privVar2 = var2;
    }
    SampleClass1.prototype.printToConsole = function () {
        console.log('privVar1: ' + this.privVar1);
        console.log('privVar2: ' + this.privVar2);
    };
    return SampleClass1;
}());
var sampleObject1 = new SampleClass1("1st class 1st value 1", "1st class 2nd value");
sampleObject1.printToConsole();
TWG_TS.HelperClass.printMessageToConsole("Helper message from 1st class file");

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcjEvc2FtcGxlLWNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUlJLHNCQUFZLElBQVksRUFBRSxJQUFZO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQUVELElBQU0sYUFBYSxHQUFHLElBQUksWUFBWSxDQUFDLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDdkYsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsb0NBQW9DLENBQUMsQ0FBQyIsImZpbGUiOiJkaXIxL3NhbXBsZS1jbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlsL2hlbHBlckNsYXNzLnRzXCIgLz5cclxuXHJcbmNsYXNzIFNhbXBsZUNsYXNzMSB7XHJcbiAgICBwcml2YXRlIHByaXZWYXIxOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByaXZWYXIyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFyMTogc3RyaW5nLCB2YXIyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnByaXZWYXIxID0gdmFyMTtcclxuICAgICAgICB0aGlzLnByaXZWYXIyID0gdmFyMjtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFRvQ29uc29sZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpdlZhcjE6ICcgKyB0aGlzLnByaXZWYXIxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpdlZhcjI6ICcgKyB0aGlzLnByaXZWYXIyKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2FtcGxlT2JqZWN0MSA9IG5ldyBTYW1wbGVDbGFzczEoXCIxc3QgY2xhc3MgMXN0IHZhbHVlIDFcIiwgXCIxc3QgY2xhc3MgMm5kIHZhbHVlXCIpO1xyXG5zYW1wbGVPYmplY3QxLnByaW50VG9Db25zb2xlKCk7XHJcblxyXG5UV0dfVFMuSGVscGVyQ2xhc3MucHJpbnRNZXNzYWdlVG9Db25zb2xlKFwiSGVscGVyIG1lc3NhZ2UgZnJvbSAxc3QgY2xhc3MgZmlsZVwiKTsiXSwic291cmNlUm9vdCI6Ii93cC1jb250ZW50L3RoZW1lcy9zdGJhc2UvYXNzZXRzL3RzLyJ9
