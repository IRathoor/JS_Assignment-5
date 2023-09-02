//Q1
var literalNotation =[]

//Q2
var objectNotation =[]

//Q3
var string1=["coke", "pepsi", "fanta"]

//Q4
var number1=[1, 2, 3]

//Q5
var boolean1=[true, false]

//Q6
var mixed =["coke", 1, false]

//Q7
var university =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.", "Phil.", "PhD"]

//Q8

var studentName=["Naveed", "Samir", "Shahid"]
var score=[320, 220, 480]
alert ("Score of " +studentName[0]+ " is " +score[0]+ " . Percentage: " +score[0]/500*100+ "%")
alert ("Score of " +studentName[1]+ " is " +score[1]+ " . Percentage: " +score[1]/500*100+ "%")
alert ("Score of " +studentName[2]+ " is " +score[2]+ " . Percentage: " +score[2]/500*100+ "%")

//Q9

var colors =[" Red ", "Blue ", "Green "]
alert ("Display the colors " +colors)
var addBeginColor = prompt ("Add New Color the beginning of the array")
colors.unshift(addNewColor )
alert ("Display the colors " +colors)
var addEndColor = prompt ("Add New Color the End of the array")
colors.push(addEndColor)
alert ("Display the colors " +colors)
colors.unshift("Green ", "Brown ")
alert ("Display the colors " +colors)
colors.shift()
alert ("Display the colors " +colors)
colors.pop()
alert ("Display the colors " +colors)
var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
alert("Updated Array (added color at index " + indexToAdd + "): " + colors + "<br>");