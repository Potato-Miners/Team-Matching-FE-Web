import React from 'react';
import styles from './SubMenu.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { userState } from 'Recoil/state';
import { logOut } from 'api/TeamMon';

export default function SubMenu({ user }) {
  const reset = useResetRecoilState(userState);
  const nav = useNavigate();
  const handleClick = () => {
    //back에서 로그아웃
    logOut(user.userId, user.token)
      .then((result) => {
        reset();
        if (result.status === 200) {
          //front에 남아있던 인증토큰 삭제
          reset();
          localStorage.removeItem('tokenTimer');
        }
      })
      .finally(() => {
        nav('/', { replace: true });
      });
  };

  return (
    <ul className={styles.submenu}>
      <li className={styles.item}>
        <Link to='mypage' className={styles.link}>
          마이페이지
        </Link>
      </li>
      <li className={styles.item} onClick={handleClick}>
        로그아웃
      </li>
    </ul>
  );
}
