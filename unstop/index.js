

// Javascript program to print
// berth type of a provided
// seat number.

// Function for
// printing berth type


function berth_type(s)
{
	
	if (s > 0 && s < 73)
		if (s % 8 == 1 ||
			s % 8 == 4)
		document.write(s +
				" is lower berth" + "<br/>");
		else if (s % 8 == 2 ||
				s % 8 == 5)
			document.write(s +
					" is middle berth" + "<br/>");
		else if(s % 8 == 3 ||
				s % 8 == 6)
			document.write(s +
					" is upper berth" + "<br/>");
		else if(s % 8 == 7)
			document.write(s +
					" is side lower berth" + "<br/>");
		else
			document.write(s +
					" is side upper berth" + "<br/>");
	else
		document.write(s +
				" invalid seat number" + "<br/>");
}

// driver program
	let s = 10;
berth_type(s); // fxn call for berth type

s = 10;
berth_type(s); // fxn call for berth type

s = 0;
berth_type(s); // fxn call for berth type
