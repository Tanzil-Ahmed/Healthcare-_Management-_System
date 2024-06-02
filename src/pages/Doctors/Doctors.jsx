import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";

const Doctors = () => {
  return (
    <>
      <section className="bg-purple-300">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Find a Doctor</h2>
          <div className="max-w-lg mx-auto bg-blue-400 bg-opacity-25 rounded-md flex items-center justify-between p-2">
            <input
              type="search"
              className="flex-1 py-2 px-4 bg-transparent focus:outline-none placeholder-gray-600"
              placeholder="Search for a Doctor"
            />
            <button className="btn ml-2">Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
