function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    var int = String(SignedDecimalInt);
    var outputValue = "";
    var base10int = 0;
    var outputValueTwosComplement = "";
    var negative = false;

    if(int.substring(0,1) == "-")
    {
      negative = true;
      int = int.substring(1);
    }

    base10int = parseInt(int);
    while(base10int > 0)
    {
    if(base10int%2 == 1)
    {
      outputValue += "1";
    }
    else
    {
      outputValue += "0";
    }
    base10int = Math.floor(base10int/2);
    }

    if(negative)
    {
      outputValue += "-";
    }

    outputValue=outputValue.split("").reverse().join("");


//twos complement

    base10int = parseInt(int);

    if(negative){
      base10int++;
      while(base10int > 0)
      {
        if(base10int%2 == 1)
        {
          outputValueTwosComplement += "0";
        }
        else
        {
          outputValueTwosComplement += "1";
        }
        base10int = Math.floor(base10int/2);
      }
    }
    else {
      outputValueTwosComplement = outputValue;
    }
    for(var i = outputValueTwosComplement.length; i< 23; i++)
    {
      outputValueTwosComplement += "0";
    }
    if(negative)
    {
      outputValueTwosComplement += "1";
    }
    else
    {
      outputValueTwosComplement += "0";
    }


    outputValueTwosComplement=outputValueTwosComplement.split("").reverse().join("");





    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
