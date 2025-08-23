import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register (Formik)</h2>
      
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          resetForm(); // clears the form after submit
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            
            {/* Username */}
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;


//"string().required"
//"string().required"