const SecondaryContainerContent = () => {
  return (
    <div className="w-full lg:w-[40%] flex flex-col gap-6 mt-5 text-[#757575] slideInLeft">
      <div>
        <h1 className="text-3xl font-medium text-black">Who We Are</h1>
        <hr className="bg-[#2235a2] h-[0.2rem] border-0 w-[23%] mt-1" />
      </div>
      <p className="font-medium">
        Medicoz offers a comprehensive health platform that leverages machine
        learning to provide personalized disease severity predictions, helping
        users manage conditions like diabetes, hypertension, heart disease, etc.
      </p>
      <p className="font-medium tracking-wide text-sm">
        The platform connects users with top doctors and clinics based on their
        health needs and offers a convenient shopping option for essential
        health monitoring devices.
      </p>
      <div className="flex gap-6">
        <ul className="text-xs list-disc space-y-2 font-medium ">
          <li>Personalized disease predictions with AI insights</li>
          <li>Connect with top doctors and clinics in the country</li>
          <li>Tailored provider recommendations for better care</li>
        </ul>
        <ul className="text-xs list-disc space-y-2 font-medium ">
          <li>Empowering informed health decisions for users</li>
          <li>Shop essential health devices effortlessly online</li>
          <li>Accurate insights for proactive health management</li>
        </ul>
      </div>
    </div>
  );
};

export default SecondaryContainerContent;
