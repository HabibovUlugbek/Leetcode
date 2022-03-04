function checkStraightLine(coordinates: number[][]): boolean {
    let a = -(coordinates[1][1] - coordinates[0][1]);
    let b = coordinates[1][0] - coordinates[0][0];
    return coordinates.every(
        item =>
            a * (item[0] - coordinates[0][0]) +
                b * (item[1] - coordinates[0][1]) ===
            0
    );
};