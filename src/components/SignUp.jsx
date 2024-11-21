import Form from "./Form";

const SignUp = () => {
  const socialMedia = [
    {
      id: 1,
      name: "Google",
      icon: "./google.png",
    },
    {
      id: 2,
      name: "Office",
      icon: "./office.png",
    },
    {
      id: 3,
      name: "Linkedin",
      icon: "./linkedin.png",
    },
    {
      id: 4,
      name: "Facebook",
      icon: "./facebook.png",
    },
    {
      id: 5,
      name: "Twitter",
      icon: "./twitter.png",
    },
  ];
  return (
    <div className="bg-white  w-[600px]    m-auto ">
      <div className="flex flex-col items-center py-3 ">
        <img src="./add.png" alt="" className="w-[40px] h-[40px]" />
        <h3 className="text-xl text-slate-600 font-bold py-3">
          Register for OpenSesame
        </h3>
      </div>

      <div className="flex justify-around items-center mt-4">
        {socialMedia.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 items-center">
            <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
            <p className="text-sm text-gray-400 font-bold">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 italic">or use email</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <Form />
    </div>
  );
};

export default SignUp;
