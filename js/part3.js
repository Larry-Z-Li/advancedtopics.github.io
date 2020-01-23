
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  floatToConvert = String(floatToConvert);
  var full = ""
  var fraction = ""



  var output32BitScientificNotation = "10100011001100001000010100101010";

  for(var i = 0; i< floatToConvert.length; i++)
  {
    if(floatToConvert.substring(i,i+1) == ".")
    {
      fraction = floatToConvert.substring(i+1);
      break;
    }
    else
    {
      full += floatToConvert.substring(i,i+1);
    }
  }

  var mantissa = full



//for mantissa

var base2mantissa = "";
var int = mantissa;

var negative = false;
if(int.substring(0,1) == "-")
{
  negative = true;
  int = int.substring(1);
}

var base10int = parseInt(int);

while(base10int > 0)
{
  if(base10int%2 == 1)
  {
    base2mantissa += "1";
  }
  else
  {
    base2mantissa+= "0";
  }
  base10int = Math.floor(base10int/2);
}

fraction = "0." + String(fraction);
fraction = parseFloat(fraction);
base2mantissa=base2mantissa.split("").reverse().join("");
var base2fraction = "";
while(base2mantissa.length+base2fraction.length<23)
{
  fraction = fraction*2;
  if(fraction>=1)
  {
    fraction-1;
    base2fraction = base2fraction + "1";
  }
  else
  {
    base2fraction = base2fraction + "0";
  }
}

//for exponent

var exponent = base2mantissa.length -1 + 128;


base2mantissa = base2mantissa + base2fraction;

base2mantissa= base2mantissa.substring(1);

for(var i = base2mantissa.length; i< 23; i++)
{
  base2mantissa = base2mantissa + "0";
}
var base2exponent = "";

base10int = exponent


while(base10int > 0)
{
  if(base10int%2 == 1)
  {
    base2exponent += "1";
  }
  else
  {
    base2exponent+= "0";
  }
  base10int = Math.floor(base10int/2);
}

base2exponent=base2exponent.split("").reverse().join("");



output32BitScientificNotation = base2mantissa + base2exponent + "0"





  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
