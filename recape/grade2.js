const grade = 33;

switch (true) {

    case grade >= 95:
        console.log(" Golden A+");
        break;
    case grade < 95 && grade >= 80:
        console.log("A+");
        break;

    case grade < 80 && grade >= 70:
        console.log("A-");
        break;

    case grade < 70 && grade >= 60:
        console.log("B");
        break;

    case grade <= 33:
        console.log("F");
        break;
    default:
        console.log("Unknown grade");
}