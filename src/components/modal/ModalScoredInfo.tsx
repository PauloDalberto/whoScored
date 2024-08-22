'use client';

import './modal.css';
import { useState } from 'react';

export default function ModalScoredInfo() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <section className="modal-container" onClick={handleClickOutside}>
      <div className="modal modal-scored-info">
        <div className='close-modal' onClick={closeModal}>
          X
        </div>
        <div className="content content-scored-info">
          <h1>Como funciona?</h1>
          <h2>Você terá 3 tentativas de descobrir quem é o jogador que marcou o gol acima</h2>

          <ul className="ul">
            <li>Os gols podem ser de qualquer data</li>
            <li>Os gols podem ser de jogadores em atividade ou aposentados</li>
            <li>Os jogadores em atividade podem já terem mudado de liga</li>
            <li>A idade do jogador é a atual idade dele, não a idade em que ele marcou o gol</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
