import MRImage from '../images/mrpropiedades.jpeg'
import VideoImage from '../images/videoimagen.jpeg'
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiFirebase, SiNextdotjs, SiRedux, SiPostgresql } from 'react-icons/si'

const projects = [
    {
      title: 'M R Propiedades',
      github: 'https://github.com/Assietta/BienesRaices',
      deploy: 'https://mr-propiedades-pf-9b1w.vercel.app/',
      image: MRImage,
      technologies: [<FaReact color='#61DBFB' size={25} />, <SiNextdotjs color='#61DBFB' size={25} />, <FaNodeJs color='#8CC84B' size={25} />, <SiExpress size={25} />, <SiTailwindcss color='#37BDF8' size={25}/>, <SiPostgresql color='0707c380' size={25} />, <SiFirebase size={25} /> ]
    },
    {
      title: 'Aplicación Videogames',
      github: 'https://github.com/NAlonsoBulacio/PI-Videogames',
      deploy: 'lol',
      image: VideoImage,
      technologies: [<FaReact color='#61DBFB' size={25} />, <SiRedux color='#0707c380' size={25} />, <FaNodeJs color='#8CC84B' size={25} />, <SiExpress size={25} />, <SiPostgresql color='0707c380' size={25} />]
    },
  ]

  export default projects
 