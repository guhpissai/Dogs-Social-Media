import React from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    setComment("");
    if (response.ok) setComments((comments) => [...comments, json]);
    <Error error={error} />;
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        onChange={({ target }) => setComment(target.value)}
        value={comment}
        name="comment"
        id={id}
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
