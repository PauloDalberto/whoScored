import { isMidnight } from "./isMidnight";

export function updatePlayerIdAtMidnight(): number {
  const LOCAL_STORAGE_KEY = 'correctPlayerId';
  const DATE_STORAGE_KEY = 'lastUpdateDate';

  const currentDate = new Date().toLocaleDateString();
  let correctPlayerId = 1;

  const storedDate = localStorage.getItem(DATE_STORAGE_KEY);
  const storedId = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storedDate === currentDate && storedId) {
    correctPlayerId = parseInt(storedId, 10);
  } else if (isMidnight()) {
    if (storedId) {
      correctPlayerId = parseInt(storedId, 10) + 1;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, correctPlayerId.toString());
    localStorage.setItem(DATE_STORAGE_KEY, currentDate);
  }

  return correctPlayerId;
}
