import { motion } from "motion/react";


const ExperienciaLaboral = [
    {year: 2023, title: "Drogueria Cobfer", description: "Description of Project A"},
    {year: 2024, title: "Serviciones Generales O & R", description: "Description of Project B"},  
    {year: 2025, title: "Confecciones Herrera", description: "Description of Project C"},
]

const Estudios = [
    {year: "2022-2025", institucion: "SENATI", carrera: "Desarrollo de Software", descripcion: "Aprendi "},
]



const LineTime = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2  container mx-auto my-10 ">
            <div className=" px-8 ">
                <h3 className="text-gray-200 pl-3 text-3xl">Estudios</h3>
                <div className="relative max-w-2xl pr-8 mt-6">
                
                <div className="absolute left-4 top-0 w-1 h-full bg-indigo-400"></div>
                {/*ACTUALIZZAR ESTO, ESTE ARCHIVO TIENE QUE SER .ASTRO Y PONER LA ANIMACION EN UN ARCHIVO .JSX COMO LOS 
                OTROS ARCHIVOS*/ }
                {Estudios.map((item, index) => (
                    <motion.div
                    key={index}
                    className="relative pl-12 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    >
                    
                    <div className="absolute left-2.5 top-6 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>

                    
                    <div className=" p-4 rounded-lg shadow-md text-gray-200">
                        <h3 className="text-xl font-semibold text-violet-500">{item.year} - {item.institucion}</h3>
                        <p className="text-lg font-semibold text-gray-200">{item.carrera}</p>
                        <p className=" mt-2 text-gray-400">{item.descripcion}</p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>

            <div className=" px-8">

                <h3 className="text-gray-200 pl-3 text-3xl">Experiencia Laboral</h3>
                
                <div className="relative max-w-2xl pr-8 mt-6">
                
                <div className="absolute left-4 top-0 w-1 h-full bg-indigo-400"></div>
                {/*ACTUALIZZAR ESTO, ESTE ARCHIVO TIENE QUE SER .ASTRO Y PONER LA ANIMACION EN UN ARCHIVO .JSX COMO LOS 
                OTROS ARCHIVOS*/ }
                {ExperienciaLaboral.map((item, index) => (
                    <motion.div
                    key={index}
                    className="relative pl-12 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    >
                    
                    <div className="absolute left-2.5 top-6 w-4 h-4 rounded-full bg-indigo-400 border-2 border-white"></div>

                    
                    <div className=" p-4 rounded-lg shadow-md text-gray-200">
                        <h3 className="text-xl font-semibold text-violet-500">{item.year} - {item.title}</h3>
                        <p className=" mt-2">{item.description}</p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
        
            
        </div>
    )
    
}



export default LineTime;