import { connect } from "react-redux";
import { getData } from "../../redux/appReducer";
import Scene from "./Scene/Scene";
import ParamForm from "./ParamForm/ParamForm";
import Preloader from "./../common/Preloader/Preloader";
import styles from "./App.module.css";

const App = ({ getData, points, isLoading, error }) => {
	const submit = (values) => {
		getData(values);
	};

	return (
		<>
			{error ? (
				<div className={styles.wrapper}>{error}</div>
			) : (
				<>
					{isLoading ? (
						<div className={styles.wrapper}>
							<Preloader />
						</div>
					) : (
						<Scene points={points} isLoading={isLoading} />
					)}
				</>
			)}

			<ParamForm onSubmit={submit} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		points: state.app.points,
		isLoading: state.app.isLoading,
		init: state.app.init,
		error: state.app.error,
	};
};

export default connect(mapStateToProps, { getData })(App);
