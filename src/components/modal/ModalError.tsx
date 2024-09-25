'use client'

import './modal.css';
import Image from 'next/image';
import { useFetchPlayers } from '@/hooks/useEffectPlayers';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

export default function ModalError(){
  const [isOpen, setIsOpen] = useState(true);

  const { lang } = useParams();
  const dict = getDictionaryUseClient(lang as Locale);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  
  return(
    <section className="modal-container" onClick={handleClickOutside}>
      <div className='modal modal-error'>
        <div className='close-modal' onClick={closeModal}>
          X
        </div>
        <div className='content content-error'>
          <h1>{dict.modalError.wasClose}</h1>
          {dict.modalError.moreLucky}
        </div>
      </div>
  </section>
  )
}