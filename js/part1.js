function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
  var int = String(UnsignedInt);
  var base = UnsignedIntBaseFrom;
  var baseto = UnsignedIntBaseTo;
  var outputValue = "";
  var base10int = 0;
  var current = 0;
  var negative = false;

  if(int.substring(0,1) == "-")
  {
    negative = true;
    int = int.substring(1);
  }
  while (int.length>1)
  {
    current = parseInt(int.substring(0,1));
    base10int = (base10int + current)* base;
    int = int.substring(1);
  }
  base10int += parseInt(int);

  while(base10int > 0)
  {
    outputValue += String(base10int%baseto);
    base10int = Math.floor(base10int/baseto);
  }
  if(negative)
  {
    outputValue += "-";
  }

  outputValue=outputValue.split("").reverse().join("");


  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
