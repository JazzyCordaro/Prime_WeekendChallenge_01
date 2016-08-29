console.log('script.js sourced');

var information = [];

var totalMonthly = 0;

var calculateIncome = function(salary) {
    console.log('calculateIncome');
    var monthlyIncome = salary / 12;
    return monthlyIncome;
}

var addInfo = function() {
    console.log('in addInfo');

    var addInfo = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        idNum: document.getElementById('idNum').value,
        jobTitle: document.getElementById('jobTitle').value,
        yearlySalary: document.getElementById('yearlySalary').value,
    };
    console.log(addInfo);

    information.push(addInfo);

    showInfo();
}

var showInfo = function() {
    document.getElementById('addInfo').innerHTML = ' ';
    var addInfo;
    totalMonthly = 0;
    for (var i = 0; i < information.length; i++) {
        var monthly = calculateIncome(information[i].yearlySalary);
        totalMonthly += monthly;
        addInfo += '<h1>' + information[i].firstName + ' ' + information[i].lastName + ' ' + information[i].idNum + ' ' + information[i].jobTitle + ' ' + monthly + ' ' + '</h1>';
    }

    console.log(' totalMonthly', totalMonthly);


    document.getElementById('addInfo').innerHTML = addInfo;
    console.log('in addInfo');
    console.log(information);
    document.getElementById("totalMonthly").innerHTML = totalMonthly;


    // clear inputs
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("idNum").value = "";
    document.getElementById("jobTitle").value = "";
    document.getElementById("yearlySalary").value = "";
}
