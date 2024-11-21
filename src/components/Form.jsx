import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Form = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    file: null,
  });

  const [errorMsg, setErrorMsg] = useState({});
  const [files, setFiles] = useState([]);
  const handleFormFields = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    setFormFields({
      ...formFields,
      [name]: val,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let validationerrors = {};

    //email validation
    if (!formFields.email.trim()) {
      validationerrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email)) {
      validationerrors.email = "Email is not valid";
    }

    //password validation

    if (!formFields.password.trim()) {
      validationerrors.password = "Password is required";
    } else if (formFields.password.length < 6) {
      validationerrors.password = "Password must be at least 6 characters long";
    }

    //confirm password validation
    if (formFields.confirmPassword !== formFields.password) {
      validationerrors.confirmPassword = "Passwords do not match";
    }

    setErrorMsg(validationerrors);
    if (
      Object.keys(validationerrors).length === 0 &&
      formFields.email &&
      formFields.password &&
      formFields.confirmPassword &&
      formFields.file
    ) {
      console.log(formFields);
      alert("Form submitted successfully");
      setFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        file: null,
      });
    setFiles([]);

    }
    else{
      alert("Please fill all the fields");
    }
    const data = document.querySelectorAll("input");
    data.forEach((item) => {
      item.value = "";
    });
    // setFormFields({
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   file: null,
    // });
  };

  const onDrop = useCallback((acceptedFiles) => {
   
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]; 
            setFiles(acceptedFiles);
      setFormFields((prev) => ({
        ...prev,
        file: file, // Update file in formFields
      }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="p-5 flex flex-col gap-4"
      >
        <div className="flex flex-col ">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formFields.email}
            onChange={handleFormFields}
            placeholder="example@domain.com"
            className="outline-none bg-gray-200 p-2 border border-gray-300 rounded-sm"
          />
          {errorMsg.email && <p style={{ color: "red" }}>{errorMsg.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleFormFields}
            placeholder="create a secure password"
            className="outline-none bg-gray-200 p-2 border border-gray-300 rounded-sm"
          />
          {errorMsg.password && (
            <p style={{ color: "red" }}>{errorMsg.password}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formFields.confirmPassword}
            onChange={handleFormFields}
            placeholder="confirm your password"
            className="outline-none bg-gray-200 p-2 border border-gray-300 rounded-sm"
          />
          {errorMsg.confirmPassword && (
            <p style={{ color: "red" }}>{errorMsg.confirmPassword}</p>
          )}
        </div>

        <div
          className="flex flex-col px-3 py-9 text-center border border-dashed rounded-sm cursor-pointer"
          {...getRootProps()}
        >
          <input onChange={handleFormFields} {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-400">Drop the image here ...</p>
          ) : (
            <p className="text-gray-400">
              Drag and drop your image here or click to select files
            </p>
          )}

          {files &&
            files.length > 0 &&
            files.map((file, index) => {
              return (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt=""
                  width={200}
                  height={200}
                  className=" m-auto"
                />
              );
            })}

          {errorMsg.image && <p style={{ color: "red" }}>{errorMsg.image}</p>}
        </div>
        <button
          className="bg-orange-400 text-white py-2 px-3 w-fit rounded-sm"
          type="submit"
        >
          Continue
        </button>
        <div className="text-gray-400 flex flex-col">
          <p>
            Already have an account? <a href="">Login now</a>{" "}
          </p>
          <p>
            Forgot your Password? <a href="">Reset it</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
