'use client';

import { useParams } from 'next/navigation';
import './modal.css';
import { useState } from 'react';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

export default function ModalScoredInfo() {
  const [isOpen, setIsOpen] = useState(true);

  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);

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
          <h1>{dict.modalInfo.howItWork}</h1>
          <h2>{dict.modalInfo.threeAttempts}</h2>

          <ul className="ul">
            <li>{dict.modalInfo.goalsAnyDate}</li>
            <li>{dict.modalInfo.retiredPlayers}</li>
            <li>{dict.modalInfo.transferredPlayers}</li>
            <li>{dict.modalInfo.currentAge}</li>
            <li>{dict.modalInfo.retiredAge}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
