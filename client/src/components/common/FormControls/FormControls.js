import styles from "./FormControls.module.css";

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input
        className={styles.formInput + " " + (hasError ? styles.error : "")}
        {...input}
        {...props}
      />
    </div>
  );
};
