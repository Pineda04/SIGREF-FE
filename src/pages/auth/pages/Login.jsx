import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../forms";
import { Button } from "../components";
import { InputField } from "../components/InputField";

export const Login = () => {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background-third">
      <div className="flex-1 flex items-center justify-center bg-background-third">
        <div className="text-center">
          <h1 className="text-8xl font-roboto font-bold tracking-wider text-general">
            SIGREF
          </h1>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background-primary">
        <div className="flex flex-col w-full items-center">
          <h2 className="text-7xl font-roboto font-bold mb-8 text-center text-third">
            Inicia Sesión
          </h2>
          <div className="rounded-xl p-6 py-12 w-130 shadow-default bg-card">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="flex flex-col">
                  <InputField
                    label="Nombre de usuario:"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.username}
                    touched={touched.username}
                  />

                  <InputField
                    label="Contraseña:"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                  />

                  <div className="flex justify-center mt-6">
                    <Button type="submit" text="Iniciar Sesión" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
