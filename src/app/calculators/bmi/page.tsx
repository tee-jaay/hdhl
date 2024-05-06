"use client";
import { useState } from "react";
import { faWeight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";

const BMICalculator = () => {
    const [bmi, setBmi] = useState(0);

    const calculateBmi = (values: { height: number; weight: number }) => {
        // Convert height to meters
        const heightInMeters = values.height / 100;

        // Calculate BMI using the formula: BMI = weight / (height * height)
        const bmi = values.weight / (heightInMeters * heightInMeters);

        setBmi(bmi);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center align-middle py-4 w-full">
                <h1 className="flex justify-start items-start text-3xl font-bold text-[#222] w-full"><span className="mr-1"><FontAwesomeIcon icon={faWeight} /></span> Body Mass Index</h1>

                <Formik
                    initialValues={{ height: 165, weight: 65 }}
                    onSubmit={calculateBmi}
                >
                    <Form className="w-full">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="height">
                                Height (cm):
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                type="number"
                                name="height"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2" htmlFor="weight">
                                Weight (kg):
                            </label>
                            <Field
                                className="border border-gray-300 p-2"
                                type="number"
                                name="weight"
                            />
                        </div>

                        <button
                            className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </Form>
                </Formik>

                {bmi > 0 && (
                    <div className="mt-4 text-center">
                        Your BMI is {bmi.toFixed(2)}.
                    </div>
                )}

                <div className="mt-32 text-gray-500 w-full">
                    <h6>References:</h6>
                    <div className="flex flex-col justify-start">
                        <a target="_blank" href="https://en.wikipedia.org/wiki/Body_mass_index">Body Mass Index (BMI) | https://en.wikipedia.org/wiki/Body_mass_index</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;