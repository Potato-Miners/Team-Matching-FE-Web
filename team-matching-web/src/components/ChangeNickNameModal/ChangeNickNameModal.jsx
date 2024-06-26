import React, { useState } from 'react';
import styles from './ChangeNickNameModal.module.css';
import { userState } from 'Recoil/state';
import { useRecoilValue } from 'recoil';
import { upDateMyPageInfo } from 'api/TeamMon';
export default function ChangeNickNameModal({ setModalOpen, userInfo }) {
  const user = useRecoilValue(userState);

  const closeModal = () => {
    setModalOpen(false);
  };
  const [fixName, setFixName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    upDateMyPageInfo(user.userId, user.token, fixName, userInfo.memo);
    alert('변경되었습니다.');
    closeModal();
  };
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <span>닉네임 변경</span>
        <button onClick={closeModal} className={styles.closeBtn}>
          X
        </button>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='changeNn'>변경할 닉네임</label>
        <input
          type='text'
          name='changeNn'
          className={styles.inputBox}
          value={fixName || ''}
          required
          onChange={(e) => [setFixName(e.target.value)]}
          placeholder='변경할 닉네임을 입력해주세요.'
        />
        <button className={styles.saveBtn}>저장</button>
      </form>
    </div>
  );
}
