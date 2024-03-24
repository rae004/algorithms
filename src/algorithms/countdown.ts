export function countDown(count: number, speed: number) {
    setTimeout(() => {
        if (count <= 0) {
            console.log('BOOOOOM!!!!');
        } else {
            console.log(count);
            countDown(count - 1, speed);
        }
    }, speed)
}