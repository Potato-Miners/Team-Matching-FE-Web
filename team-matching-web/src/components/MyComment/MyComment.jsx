import React from 'react';
import styles from './MyComment.module.css';
import { useNavigate } from 'react-router-dom';

export default function MyComment({ comment, comment: { postDto } }) {
  const nav = useNavigate();
  const post = postDto;
  return (
    <li
      className={styles.list}
      onClick={() => {
        nav(`/board/${comment.id}`, { state: { post } });
      }}
    >
      <p className={styles.content}>{comment.content}</p>
      <p className={styles.date}>{formatDate(comment.createdAt)}</p>
      <p className={styles.postData}>
        {comment.postDto.title}
        <span
          className={styles.commentsCount}
        >{`[${post.commentDtos.length}]`}</span>
      </p>
    </li>
  );
}

function formatDate(date) {
  return `${date.substr(2, 2)}.${date.substr(5, 2)}.${date.substr(8, 2)} 
  ${date.substr(11, 5)}`;
}
