let a = "torre";

switch (a) {
    case "bispo":
        console.log("movimento diagonal");
        break;
    case "rei":
        console.log("movimento horizontal e vertical");
        break;
    case "rainha":
        console.log("movimento horizontal e diagonal");
        break;
    case "torre":
        console.log("movimento horizontal");
        break;
    case "cavalo":
        console.log("movimento em L");
        break;
    case "peao":
        console.log("movimento em uma casa");
        break;
    default:
        console.log("não é um peça válida");
        break;
}
