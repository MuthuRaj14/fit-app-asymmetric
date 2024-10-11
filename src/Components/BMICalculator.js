import React, { useState } from "react";
import bmi from "../images/calc.jpeg";
import "../Styles/Bmi.css"

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    let result = ""
    if (bmiResult <= 18) {
        result = "Under Weight, Join in our gym and buid perfect body"
    }
    else if (bmiResult > 18 && bmiResult <= 25) {
        result = "Normal, Join in our gym and enjoy"
    }
    else {
        result = "Over Weight, Join in our gym and build your future"
    }



    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiResult(bmi); // Update the BMI result state
        } else {
            alert("Please enter valid height and weight");
        }
    };

    return (
        <div className="bg-zinc-950 min-h-screen flex justify-center items-center calc-fragment" id="calc">
            <div className="flex max-w-3xl bg-gray-100 rounded-lg shadow-xl overflow-hidden mx-4 md:mx-0 transition-transform transform hover:scale-105 calc-bg">
                {/* Left Side - BMI Form */}
                <div className="p-8 flex-1">
                    <h1 className="text-4xl font-bold text-left mb-6 calc-text">
                        CALCULATE <span className="text-green-400">YOUR BMI</span>
                    </h1>
                    <p className="text-gray-300 text-left mb-6 calc-text">
                        The body mass index (BMI) calculator calculates body mass index
                        from your weight and height.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none"
                            />
                            <span className="text-gray-400 calc-text">CM</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none"
                            />
                            <span className="text-gray-400 calc-text">KG</span>
                        </div>

                        <button
                            onClick={calculateBMI}
                            className="mt-4 p-3 bg-green-400 text-black rounded-md font-bold"
                        >
                            Calculate Now →
                        </button>
                    </div>

                    {/* Display BMI Result */}
                    {bmiResult && (
                        <div className="mt-6 p-4 bg-gray-700 text-center rounded-md">
                            <h2 className="text-xl font-semibold text-green-500">Your BMI is:</h2>
                            <p className="text-3xl font-bold text-white">{bmiResult}</p>
                            <p className="msg">{result}</p>
                        </div>
                    )}
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 hidden md:flex justify-center items-center p-4">
                    <img
                        src={bmi}
                        alt="Fitness Model"
                        className="h-full max-h-[500px] object-cover rounded-lg shadow-xl bmi-img"
                    />
                </div>
            </div>
        </div>
    );
}


export default BMICalculator;