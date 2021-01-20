import React, { useMemo } from "react";
import * as THREE from "three";

const Cone = ({ points }) => {
	debugger;
	const newPoints = useMemo(() => points.map((p) => new THREE.Vector3(...p)), [points]);

	const f32array = useMemo(
		() =>
			Float32Array.from(
				new Array(newPoints.length).fill().flatMap((item, index) => newPoints[index].toArray())
			),
		[newPoints]
	);

	return (
		<line position={[0, 0, 0]}>
			<bufferGeometry attach="geometry">
				<bufferAttribute attachObject={["attributes", "position"]} args={[f32array, 3]} />
			</bufferGeometry>
			<lineBasicMaterial attach="material" color="#5243aa" />
		</line>
	);
};

export default Cone;
