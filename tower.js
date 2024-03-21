function createTower(num) {
    const towerFloors = [
        "     *     ",
        "    ***    ",
        "   *****   ",
        "  *******  ",
        " ********* ",
        "***********"
    ];
    
    for(let i = 0; i < num; i++) {
      console.log(towerFloors[i]);
    }
}

createTower(4);