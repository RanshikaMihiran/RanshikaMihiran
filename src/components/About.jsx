import profilePic from "../assets/RanshikaMihiran.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
          <img className="rounded-2xl" src={profilePic} alt="aboutME"  />
        </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6">I'm a final-year IT student at SLIIT, pursuing a BSc (Hons) in Information Technology. I've built a strong foundation in software development, database management, and system design. During my 6-month internship, I gained hands-on experience in web development and building secure, scalable applications, enhancing my problem-solving skills.
          I'm detail-oriented, hardworking, and passionate about learning new technologies to stay ahead in the evolving IT industry. I thrive in collaborative environments, contributing to team success while growing professionally and personally.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
