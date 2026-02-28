import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
  });

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl mb-4">
        Registration Form
      </h2>

      <Formik

        initialValues={{
          username: "",
          email: "",
          password: ""
        }}

        validationSchema={validationSchema}

        onSubmit={(values, { resetForm }) => {

          console.log("Form Submitted:", values);

          resetForm();
        }}

      >

        <Form className="space-y-4">

          {/* Username */}
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 border rounded"
            />

            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>


          {/* Email */}
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />

            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500"
            />
          </div>


          {/* Password */}
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />

            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>


          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Register
          </button>

        </Form>

      </Formik>

    </div>
  );
};

export default FormikForm;