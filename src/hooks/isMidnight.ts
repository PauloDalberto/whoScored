export function isMidnight(): boolean {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return hours === 0 && minutes === 0 && seconds === 0;
}
