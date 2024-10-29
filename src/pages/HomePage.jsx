import Hero from "../components/Hero/Hero";
import Speciality from "../components/Speciality/Speciality";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import TopDoctors from "../components/Doctors/TopDoctors";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div
      className="homepage mx-4 shadow-2xl"
      style={{ backgroundColor: "#ffffff", height: "auto" }}
    >
      <Hero />
      <Speciality />
      <TopDoctors />
      <CreateAccount />
      <Footer/>
    </div>
  );
};

export default HomePage;
