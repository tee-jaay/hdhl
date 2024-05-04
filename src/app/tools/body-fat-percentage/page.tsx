"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const BodyFatPercentageCalculator: React.FC = () => {
    const [bodyFatPercentage, setBodyFatPercentage] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center justify-center align-middle w-full py-4">
            <h1 className="flex justify-start items-start align-middle w-full text-[#222]"><span className="mr-1"><FontAwesomeIcon icon={faCalculator} /></span> Body Fat Percentage Calculator</h1>
            <Formik
                initialValues={{ weight: 60, height: 160, gender: "male" }}
                validationSchema={Yup.object({
                    weight: Yup.number().required("Weight is required"),
                    height: Yup.number().required("Height is required"),
                    gender: Yup.string().required("Gender is required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    // Calculate the body fat percentage based on the user's weight, height, and gender.
                    const bfp =
                        1.2 * Number(values.weight) +
                        0.23 * Number(values.height) -
                        10.8 * (values.gender === "male" ? 1 : 0) -
                        5.4;

                    // Set the body fat percentage state.
                    setBodyFatPercentage(bfp);

                    setSubmitting(false);
                }}
            >
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
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="height">
                            Height (cm)
                        </label>
                        <Field
                            className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                            type="number"
                            id="height"
                            name="height"
                        />
                        <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="gender">
                            Gender
                        </label>
                        <Field
                            className="border border-gray-300 p-2 focus:border-[#43A047] focus:outline-none focus:ring"
                            as="select"
                            id="gender"
                            name="gender"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
                    </div>
                    <button
                        className="text-white bg-[#161B2B] hover:bg-[#43A047] transition ease-in-out duration-200 py-2 px-4 mt-1"
                        type="submit"
                    >
                        Calculate
                    </button>
                </Form>
            </Formik>
            {bodyFatPercentage && (
                <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    Your body fat percentage is {bodyFatPercentage.toFixed(2)}%.
                </div>
            )}

            <div className="mt-32 text-gray-500 w-full">
                <h6>References:</h6>
                <div className="flex flex-col justify-start">
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Body_fat_percentage">Body Fat Percentage | https://en.wikipedia.org/wiki/Body_fat_percentage</a>
                </div>
            </div>
        </div>
    );
};

export default BodyFatPercentageCalculator;