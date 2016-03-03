//alert('Hello');
//alert('Really?');
//document.write('Here');

var = "Luke"
var my_Name = 'NoticeMe'
var myLastName = 'Senpai'
alert(my_Name + ' ' + myLastName);

var age = 666;
var numbra = 999;
var penumbra = 13;

//alert(age + penumbra);
//alert(age * penumbra);
//alert(age / penumbra);
//alert(age - penumbra);

var newNum = numbra - penumbra;

alert(newNum);

var isNoticed = true;
var isNotNoticed = false;

if (isNoticed &&! isNotNoticed) {
	alert("Senpai noticed me!");
} else {
	alert("Notice me, Senpai");
}

if (isNoticed || isNotNoticed) {
	alert("Senpai just noticed me again!");
} else {
	alert("Y U NO NOTICE ME, SENPAI?!");
}

if (age > 5) {
	alet ('Over 5');
} else {
	alert ('Under 5');
}

if (age >= 25 && isNoticed && isNotNoticed) {
	alert ('Senpai finally notice me');	
}

var newName = prompt('What is your name?')

if (newName == 'Luke') {
	alert ('Luke, I am your father');
} else {
	alert ('Feel the force');
}