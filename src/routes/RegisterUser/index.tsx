import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <main className="flex items-center justify-center min-h-[100vh]">
      <div className="px-8 bg-white shadow-md rounded-md">
        <section className=" w-[80%] md:w-[40rem] h-[35rem] py-8 px-10  bg-white overflow-y-scroll scrollbar scrollbar-mr">
          <h1 className="text-4xl font-semibold text-[#607485] uppercase  tracking-wider">
            Add user
          </h1>
          <h2 className="text-[#607485] text-lg my-3 capitalize font-semibold">
            1/2 Personal Details
          </h2>
          <form action="" className="text-sm">
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="title">Title</label>
              <input
                className="border border-[#DEE6ED] rounded h-8 px-3"
                type="text"
                name="title"
                id="title"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="firstName">First Name</label>
              <input
                className="border border-[#DEE6ED] rounded h-8 px-3"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="border border-[#DEE6ED] rounded h-8 px-3"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="gender">Gender</label>
              <select
                className="border border-[#DEE6ED] rounded h-8 px-3"
                name="gender"
                placeholder="select"
                id="gender">
                <option value="" className="text-[#97A7B4]">
                  select
                </option>
                <option value="male">he/him</option>
                <option value="female">she/her</option>
                <option value="neutrak">they/them</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="email">Email Address</label>
              <input
                className="border border-[#DEE6ED] rounded h-8 px-3"
                type="email"
                name="email"
                id="email"
                placeholder="Email-Address@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                className="border border-[#DEE6ED] rounded h-8 px-3"
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="select date"
              />
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Index;
