var pos = [1, 1];
var path = [
    "UULDRRRDDLRLURUUURUURDRUURRDRRURUDRURRDLLDRRRDLRUDULLRDURLULRUUURLDDRURUDRULRDDDUDRDLDDRDDRUURURRDDRLRLUDLUURURLULLLRRDRLDRLRDLULULRDRDDUURUDRRURDLRRDDDLUULDURDLDLLRLRLLUDUDLRDDLUURUUDDRDULDDLDLLDULULRLDDDUDDDRLLRURLRDUUUDUUDDURRDLDDLRDLLUDDLDRLDULDRURLUUDLURLUDRULRLRUUUURLUUUDDULLRLLURDRURLLRLRLDDRURURULRULLUUUULUDULDDDRDDLURLUURRLDDRDRUDDRRLURRDURRLDUULRRLLRDLLDDUURULLRUURRRRDRRURLULLRLRDDULULRDLDDLULLD",
    "UUDUDDRRURRUDDRLDLURURLRLLDRLULLUURLLURDRLLURLLRRLURDLDURUDRURURDLRDRRDULRLLLRDLULDRLLDLDRLDDRUUUUULRLDUURDUUUURUUDLRDLLDRLURULDURURLDLLRDLULLULLLLLUDUDDLRLLLUDLRUUDDUUDUDDDLULDDUDUULUUDUDRRULRRRURUDUUULDDRURLLULLULURLUDRDLUUUDLDRRLRRRULLRRURRUDDDRDLDDDLDUDLLDRRDURRURRURRLDLURUULRLDLUDUDUUULULUUDDDLDDULRDULLULDRDDURRURRRULRDURULUDURRDLLUURRUURLLLULDRRULUUUURLRLRDDDDULLUUUDRRLRRLRRLLLUDDDLRDDURURRDULLLUDLUDURRLRDURUURURDRDUUURURRUDRURRULLDDURRLRRRUULDRLDRRURUDLULRLLRRDLDDRLRRULDDLLUURUDDUDRLUD",
    "DDDUDDRRDRRRUULDRULDLDLURRRUURULRUDDRLLLLURRLRULDLURRULDRUDRRLLLLDULRDLUUURDDLDLURRLLUUURLLUDLUDRRDDULLULURDULRRDLRLDRRUUUUDLRRDLDDLDULDRUULRLLDLRURRUDLDDDRUUULLDDLULDULDUURUDDDLULUDLUURLRURUURDDUDRRLDRRRDDDDRDLUDRRDURDLDRURDDDRRLLLRDDRRRDDLDRLLUURRLDRDDRDLRDDLLDRLRDRDDDURLULLRUURDLULRURRUUDLDRLDRRDDRLDDUULLRDDRRLLLDDDUURDUDRUDUDULDULRUURLDURRDLUURRDLLDDLLURUUUDRLUURRDLUDUULRURLUDDLLRUDURRDRRRDRDLULRRLRUDULUUDRLURRRRLULURRDLLDRDDRLULURDURRDUUULLRDUUDLDUDURUDRUDDLRLULRLRLRRRLRUULLDDLUDDLDRRRLDDLLRLRLRUDULRLLLUULLDRDLDRRDULLRRLLDLDUDULUDDUUDLRDRLUUULLRLDLDDLLRUDDRDD",
    "DDUURRLULDLULULLDUDDRURDDRLRDULUURURRLURDLRRDUUDLULDRDLDLRLULLRULLDRLDRRULUDRLDURUURLLDLLDDLUULLRLRULRLUURDDDDDRLDRLLLDLULDLDLULRRURLLLLLLRLUDLRRLRULUULLLLURDLLRLLDDUDLLULDLLURUUDLRDRDUDDDRDDUULRLLDDDLLRLURLUDLULRRUUUULLDLDLLLDRLUDRDRDLUDLRUDRDRUDRDLLDDLRRLRDLDURDLDRUUUDRLULUULDURDLUUUDDDDDLDRDURDLULDDLLUDUURRUDDLURUDDLRLUUDURUDUULULUDLDLUURDULURURULDDDLUUUUDLUUDUDLLLRDDLRDDLRURRRLLLULLURULLRDLLDRULRDDULULRLUDRRRDULRLLUDUULLRDRDDDULULRURULDLDLDRDLDUDRDULLUUUUUDLRDURDUUULLLRUULLRUULDRRUUDLLLULLUURLDDLUULLRLRLRDRLLLRLURDDURUDUULULDLRLRLLUDURRURDRUDLRDLLRDDRDUULRDRLLRULLUDDRLDLDDDDUDRDD",
    "URDLUDUDLULURUDRLUDLUDLRLRLLDDDDDLURURUURLRDUDLRRUUDUURDURUULDRRRDDDLDUURRRDLRULRRDLRUDUDLDDDLLLRLRLRUUUUUULURRRLRLUDULURLDLLDUUDDRUDLDUDRRLULLULLDURDDRRLLRLDLLLLRLULLDDDDLDULLRDUURDUDURRUULLDRULUDLUULUUDDLDDRDLULLULDLDRLDLRULLRLURDURUDRLDURDRULRLLLLURRURLRURUDUDRRUDUUDURDDRRDRLURLURRLDRRLLRLRUDLRLLRLDLDDRDLURLLDURUDDUUDRRLRUDLUDULDRUDDRDRDRURDLRLLRULDDURLUUUUDLUDRRURDDUUURRLRRDDLULLLDLRULRRRLDRRURRURRUUDDDLDRRURLRRRRDLDLDUDURRDDLLLUULDDLRLURLRRURDRUULDDDUDRDRUDRRLRLLLLLURDULDUDRLULDRLUULUDDDDUDDRDDLDDRLLRULRRURDDDRDDLDLULRDDRRURRUDRDDDDRURDRRURUUDUDDUURULLDRDULURUDUD"
];
for (var i = 0; i < path.length; i++) {
    for (var j = 0; j < path[i].length; j++) {
        if (path[i].charAt(j) == "U") {
            if (pos[1] > 0) pos[1]--;
        }
        if (path[i].charAt(j) == "D") {
            if (pos[1] < 2) pos[1]++;
        }
        if (path[i].charAt(j) == "L") {
            if (pos[0] > 0) pos[0]--;
        }
        if (path[i].charAt(j) == "R") {
            if (pos[0] < 2) pos[0]++;
        }
    }
    if (pos[0] == 0 && pos[1] == 0) console.log("Numpad: " + pos[0] + pos[1] + " = 1");
    if (pos[0] == 1 && pos[1] == 0) console.log("Numpad: " + pos[0] + pos[1] + " = 2");
    if (pos[0] == 2 && pos[1] == 0) console.log("Numpad: " + pos[0] + pos[1] + " = 3");
    if (pos[0] == 0 && pos[1] == 1) console.log("Numpad: " + pos[0] + pos[1] + " = 4");
    if (pos[0] == 1 && pos[1] == 1) console.log("Numpad: " + pos[0] + pos[1] + " = 5");
    if (pos[0] == 2 && pos[1] == 1) console.log("Numpad: " + pos[0] + pos[1] + " = 6");
    if (pos[0] == 0 && pos[1] == 2) console.log("Numpad: " + pos[0] + pos[1] + " = 7");
    if (pos[0] == 1 && pos[1] == 2) console.log("Numpad: " + pos[0] + pos[1] + " = 8");
    if (pos[0] == 2 && pos[1] == 2) console.log("Numpad: " + pos[0] + pos[1] + " = 9");
}