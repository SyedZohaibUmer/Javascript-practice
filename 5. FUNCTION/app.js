// 1. FUNCTIONS//

function data(name) {
    console.log("hey " + name + " you're good");
    console.log("hey " + name + " you're amazing");
    console.log("hey " + name + " you look nice");
    console.log("hey " + name + " you're so beautiful");

}
data("zohaib")
data("umer")
data("qavi")

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();

    alert("Current time: " + theHr + ":" + theMin );
}
tellTime();




