import React, { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//  luz activa con click en cada div
	const [light, setLight] = useState("gray");
	//constante para el intervalo 
	const [active, setActive] = useState(false);



	// clic de la luz en los div
	const click = (light) => {
		setLight(light);
	};

	
	//cambio a la luz púrpura
	const [hiddenLight, setHiddenLight] = useState(false);
	console.log(hiddenLight);
	const hidden = () => {
		setHiddenLight(true);
		console.log(hiddenLight);
	};

	// intervalo de las luces (basado en el vídeo de la academia)
	useEffect(() => {
		let interval;
		if (active) {
			interval = setInterval(() => {
				if (light === "gray") {
					setLight("red");
				} else if (light === "red") {
					setLight("yellow");
				} else if (light === "yellow") {
					setLight("green");
				} else if (light === "green") {
					setLight("gray");
				}
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [active, light]);


	return (
		<>
			<div className="box mx-auto mt-5"

			>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<div className="red"
						onClick={() => click("red")}
						style={{
							backgroundColor: light === "red" ? "red" : "gray",
							boxShadow: light === "red" ? "0 0 40px 10px red" : "none",
						}}
					></div>
					<div className="yellow"
						onClick={() => click("yellow")}
						style={{
							backgroundColor: light === "yellow" ? "yellow" : "gray",
							boxShadow: light === "yellow" ? "0 0 40px 10px yellow" : "none",
						}}
					></div>
					<div className="green"
						onClick={() => click("green")}
						style={{
							backgroundColor: light === "green" ? "green" : "gray",
							boxShadow: light === "green" ? "0 0 40px 15px green" : "none",
						}}
					></div>

					<div className="purple"
						onClick={() => click("purple")}
						style={{
							display: hiddenLight === false ? "none" : "inline-block",
							backgroundColor: "purple",
							boxShadow: "0 0 40px 10px purple",
						}}
					></div>

				</div>

				
			{/* //botones para el color púrpura */}
			</div>
			<div className="buttona text-center mt-5 mx-auto"> <button className="btn" style={{ color: "white" }}
				onClick={() => hidden()
				}> Purple On</button></div>
			<div className="buttonb text-center mt-3 mx-auto"> <button className="btn" style={{ color: "white" }} 
				onClick={() => setHiddenLight(false)}>Purple Off</button></div>

			{/* //botón para alternar los colores automáticamente. si se vuelve a pulsar deja de alternar */}

			<div className="buttonc text-center mt-3"> <button className="btn btn-danger" 
				onClick={() => setActive(!active)}>Go Nuts!</button></div>
		</>
	);
};

//   export default;
export default Home;
//He intentado hacer el botón que alterne las luces y, aunque he conseguido algo (al final he acabado tirando del vídeo de la academia), creo que lo podría haber hecho de otra manera más "prolija". He intentado hacerlo con un ternario como los con los otros pero no he podido (me imagino por qué pero soy un poco cabezota). Creo que me vendría bien una mentoría para esto. Si alguna de vosotras podéis, y queréis, explicarme cómo va os lo agradecería pq es ya una obsesión. <3 