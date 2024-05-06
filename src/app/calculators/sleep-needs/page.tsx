"use client";

import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import CalculatorShowResult from "@/components/common/calculators/CalculatorShowResult";

const validationSchema = Yup.object().shape({
    age: Yup.number()
        .required("Please enter your age")
        .min(1, "Age must be a positive number"),
    lifestyle: Yup.string().required("Please select your lifestyle"),
});

const SleepNeedsCalculator: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center justify-center align-middle w-full py-4">
            <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faBed} /></span> Sleep Needs Calculator</h1>
            <Formik
                initialValues={{
                    age: 20,
                    lifestyle: "lightly active",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setFieldValue }) => {
                    let sleepNeeds = 0;
                    switch (values.lifestyle) {
                        case "sedentary":
                            sleepNeeds = 7 - 0.1 * values.age;
                            break;
                        case "lightly active":
                            sleepNeeds = 7.5 - 0.1 * values.age;
                            break;
                        case "moderately active":
                            sleepNeeds = 8 - 0.1 * values.age;
                            break;
                        case "very active":
                            sleepNeeds = 8.5 - 0.1 * values.age;
                            break;
                    }
                    // Set the sleepNeeds value in state
                    setResult(sleepNeeds);
                }}
            >
                <Form className="w-full">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2" htmlFor="age">Age:</label>
                        <Field
                            id="age"
                            name="age"
                            type="number"
                            placeholder="Enter your age"
                            className="border border-gray-300 p-2"
                        />
                        <ErrorMessage name="age" component="div" className="error text-red-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="lifestyle">Lifestyle:</label>
                        <Field
                            as="select"
                            id="lifestyle"
                            name="lifestyle"
                            className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                        >
                            <option value="sedentary">Sedentary</option>
                            <option value="lightly active">Lightly Active</option>
                            <option value="moderately active">Moderately Active</option>
                            <option value="very active">Very Active</option>
                        </Field>
                        <ErrorMessage name="lifestyle" component="div" className="error text-red-500" />
                    </div>
                    <button
                        className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                        type="submit"
                    >
                        Calculate
                    </button>
                </Form>
            </Formik>

            {result && <CalculatorShowResult preStr="Your recommended sleep are" value={result} postStr="hours per night" />}

            <div className="mt-32 text-gray-500 w-full">
                <h6>References:</h6>
                <div className="flex flex-col justify-start">
                    <a target="_blank" href="https://www.sleepfoundation.org/sleep-calculator">Your Personalized Tool for Sleep | https://www.sleepfoundation.org/sleep-calculator</a>
                    <a target="_blank" href="https://www.ghostbed.com/pages/guide-to-determining-how-much-sleep">Easy Guide to Determining How Much Sleep You Need | https://www.ghostbed.com/pages/guide-to-determining-how-much-sleep</a>
                    <a target="_blank" href="https://www.healthline.com/health/sleep/sleep-calculator">How to Calculate When You Should Go to Sleep | https://www.healthline.com/health/sleep/sleep-calculator</a>
                </div>
            </div>
        </div>
    );
};

export default SleepNeedsCalculator;