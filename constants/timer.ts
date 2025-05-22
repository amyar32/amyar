/* eslint-disable no-console */
export default function startCountdown(
    seconds: number,
    onTick?: (remaining: number) => void,
    onComplete?: () => void
): void {
    let remaining = seconds;

    const interval = setInterval(() => {
        if (onTick) {
            onTick(remaining);
        } else {
            console.log(`${remaining} second(s) remaining`);
        }

        remaining--;

        if (remaining < 0) {
            clearInterval(interval);
            if (onComplete) {
                onComplete();
            } else {
                console.log("Time's up!");
            }
        }
    }, 1000);
}
