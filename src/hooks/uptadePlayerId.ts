import { isMidnight } from "./isMidnight";

export function updatePlayerIdAtMidnight(): number {
  const LOCAL_STORAGE_KEY = 'correctPlayerId';
  const DATE_STORAGE_KEY = 'lastUpdateDate';

  const currentDate = new Date().toLocaleDateString();
  let correctPlayerId = 1;

  // Verifica se o ID e a data estão armazenados no localStorage
  const storedDate = localStorage.getItem(DATE_STORAGE_KEY);
  const storedId = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storedDate === currentDate && storedId) {
    // Se a data de hoje já foi armazenada, usar o ID armazenado
    correctPlayerId = parseInt(storedId, 10);
  } else if (isMidnight()) {
    // Se for meia-noite, incrementar o ID e armazenar a nova data e ID
    if (storedId) {
      correctPlayerId = parseInt(storedId, 10) + 1;
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, correctPlayerId.toString());
    localStorage.setItem(DATE_STORAGE_KEY, currentDate);
  }

  return correctPlayerId;
}
