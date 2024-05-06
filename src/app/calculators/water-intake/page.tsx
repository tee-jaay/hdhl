"use client";

import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import CalculatorShowResult from "@/components/common/calculators/CalculatorShowResult";

const validationSchema = Yup.object().shape({
    weight: Yup.number()
        .required("Please enter your weight")
        .min(1, "Weight must be a positive number"),
    activityLevel: Yup.string().required("Please select your activity level"),
});

const WaterIntakeCalculator = () => {
    const [waterAmount, setWaterAmount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center align-middle w-full py-4">
            <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faWater} /></span> Water Intake</h1>
            <Formik
                initialValues={{
                    weight: 50,
                    activityLevel: "sedentary",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // Calculate water intake based on weight and activity level
                    let waterIntake = 0;
                    switch (values.activityLevel) {
                        case "sedentary":
                            waterIntake = values.weight * 30;
                            break;
                        case "lightly active":
                            waterIntake = values.weight * 35;
                            break;
                        case "moderately active":
                            waterIntake = values.weight * 40;
                            break;
                        case "very active":
                            waterIntake = values.weight * 45;
                            break;
                    }

                    // Set the water intake amount in state
                    setWaterAmount(waterIntake);

                    // Mark submitting as false to enable the button
                    setSubmitting(false);
                }}
            >
                {() => (
                    <Form className="w-full">
                        <div className="flex flex-col mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="weight">
                                Weight (kg)
                            </label>
                            <Field
                                className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                                type="number"
                                id="weight"
                                name="weight"
                            />
                            <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="activity-level">
                                Activity Level
                            </label>
                            <Field
                                as="select"
                                className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                                id="activity-level"
                                name="activityLevel"
                            >
                                <option value="sedentary">Sedentary</option>
                                <option value="lightly active">Lightly Active</option>
                                <option value="moderately active">Moderately Active</option>
                                <option value="very active">Very Active</option>
                            </Field>
                            <ErrorMessage name="activityLevel" component="div" className="text-red-500 text-sm" />
                        </div>

                        <button
                            className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </Form>
                )}
            </Formik>

            {waterAmount > 0 && <CalculatorShowResult preStr="Recommended daily water intake is" value={waterAmount} postStr="ml" />}

            <div className="mt-32 text-gray-500 w-full">
                <h6>References:</h6>
                <div className="flex flex-col justify-start">
                    <a target="_blank" href="https://www.efsa.europa.eu/en/efsajournal/pub/2058">Scientific Opinion | https://www.efsa.europa.eu/en/efsajournal/pub/2058</a>
                    <a target="_blank" href="https://www.who.int/publications/i/item/9789241548151">Guidelines For Drinking-Water Quality | https://www.who.int/publications/i/item/9789241548151</a>
                    <a target="_blank" href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256">How much should you drink every day? | https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256</a>
                </div>
            </div>
        </div>
    );
};

export default WaterIntakeCalculator;