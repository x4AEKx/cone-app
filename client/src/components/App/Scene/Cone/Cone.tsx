import { useMemo, FC } from "react";
import * as THREE from "three";

type PointsType = Array<number>
type PropsType = {
	points: Array<PointsType>
}

const Cone:FC<PropsType> = ({ points }) => {
	debugger;
	const newPoints = useMemo(() => points.map((p) => new THREE.Vector3(...p)), [points]);

	const f32array = useMemo(
		() =>
			Float32Array.from(
				new Array(newPoints.length).fill(1).flatMap((item, index) => newPoints[index].toArray())
			),
		[newPoints]
	);

	return (
		<line>
			<bufferGeometry attach="geometry">
				<bufferAttribute attachObject={["attributes", "position"]} args={[f32array, 3]} />
			</bufferGeometry>
			<lineBasicMaterial attach="material" color="#5243aa" />
		</line>
	);
};

export default Cone;
