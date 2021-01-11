import { Input } from "../../common/FormControls/FormControls";
import { required } from "../../common/validators/validators";
import { Field, reduxForm } from "redux-form";
import styles from "./ParamForm.module.css";

let ParamForm = ({ handleSubmit, invalid, pristine, submitting }) => {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h3>Type params for 3D-cone configuration</h3>
        <div className={styles.mt5}>
          <label htmlFor="coneHeight">Cone Height</label>
          <Field
            name="coneHeight"
            component={Input}
            type="number"
            validate={[required]}
          />
        </div>
        <div className={styles.mt5}>
          <label htmlFor="Radius">Radius of Circle</label>
          <Field
            name="Radius"
            component={Input}
            type="number"
            validate={[required]}
          />
        </div>
        <div className={styles.mt5}>
          <label htmlFor="segmentsNumber">Number of Segmentson a Circle</label>
          <Field
            name="segmentsNumber"
            component={Input}
            type="number"
            validate={[required]}
          />
        </div>
        <button
          className={styles.mt10}
          type="submit"
          disabled={invalid || pristine || submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParamForm = reduxForm({
  // a unique name for the form
  form: "param",
})(ParamForm);
