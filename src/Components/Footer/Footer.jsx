import { FaCopyright, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-evenly text-slate-900 border-t border-slate-900 text-base ">
      <p className="text-slate-900 flex gap-1">Todos los derechos reservados a Bagues<FaRegCopyright className="mt-0.5"/></p>
      <a href="https://www.linkedin.com/in/martincostadaddato/" className="text-slate-900 flex gap-2">
        Proyecto creado por{" "}
        <b>
            Martin Costa D'Addato
        </b>
        <FaLinkedin className="mt-0.5"/>
      </a>
      
    </div>
  );
};

export default Footer;
