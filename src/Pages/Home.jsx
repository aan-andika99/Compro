import HeroImage from "../assets/images/hero.svg";

const Home = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 item gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-2xl font-medium mb-7">lorem</h1>
            <p className="text-base/8 mb-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aut necessitatibus quos praesentium cupiditate quo quam similique? Quae saepe aliquid iste cupiditate eius ipsam error quidem deleniti! Ducimus, beatae dicta.</p>
            <a href="" className="bg-sky-300 hover:bg-sky-700 text-white transition-all py-2 px-4 shadow rounded-full"><i className="ri-eye-line ms-1 fixed-5"></i> Selanjutnya</a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="hero"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
