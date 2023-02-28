function bigger()
{
	document.getElementById("text").style.fontSize = "24pt";
}

function moo()
{
	var str = document.getElementById("text");
	var originalString = str.value;
	var uppercasedString = originalString.toUpperCase();
	
	var separateWords = uppercasedString.split(" ");
	separateWords[separateWords.length - 1] += "-Moo";
	
	var modified = separateWords.join(" ");
	str.value = modified;
}

function fancify()
{
	var radio = document.getElementById("radio1");
	
	if(radio1.checked)
	{
		document.getElementById("text").style.fontWeight = "bold";
		document.getElementById("text").style.color = "blue";
		document.getElementById("text").style.textDecoration = "underline";
	}
}

function boring()
{
	var radio = document.getElementById("radio2");
	
	if(radio2.checked)
	{
		document.getElementById("text").style.fontWeight = "normal";
		document.getElementById("text").style.color = "black";
		document.getElementById("text").style.textDecoration = "none";
	}
}