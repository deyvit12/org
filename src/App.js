import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://media.licdn.com/dms/image/D4E03AQEJRAviNDricw/profile-displayphoto-shrink_800_800/0/1669511869760?e=1689811200&v=beta&t=XxmkqmBRJQIoiS_7Zj0PzTU4Ynm4AfhZnfRCbAWVQgY",
    nombre: "Deyvit Acosta Coronado",
    puesto: "Ingeniero De Sistemas y desarrollador",
    favorito: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: " https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e instructor",
    favorito: false
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: " https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    favorito: false
  },
  {
  id: uuid(),
  equipo: "Programación",
  foto: "https://media.licdn.com/dms/image/D4E03AQEJRAviNDricw/profile-displayphoto-shrink_800_800/0/1669511869760?e=1689811200&v=beta&t=XxmkqmBRJQIoiS_7Zj0PzTU4Ynm4AfhZnfRCbAWVQgY",
  nombre: "Deyvit Acosta Coronado",
  puesto: "Ingeniero De Sistemas y desarrollador",
  favorito: false
},
{
  id: uuid(),
  equipo: "Programación",
  foto: " https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e instructor",
  favorito: true
},
{
  id: uuid(),
  equipo: "Programación",
  foto: " https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  favorito: false
},
{    id: uuid(),
  equipo: "Data Science",
  foto: "https://media.licdn.com/dms/image/D4E03AQEJRAviNDricw/profile-displayphoto-shrink_800_800/0/1669511869760?e=1689811200&v=beta&t=XxmkqmBRJQIoiS_7Zj0PzTU4Ynm4AfhZnfRCbAWVQgY",
  nombre: "Deyvit Acosta Coronado",
  puesto: "Ingeniero De Sistemas y desarrollador",
  favorito: false
},
{
  id: uuid(),
  equipo: "Data Science",
  foto: " https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e instructor",
  favorito: false
},
{
  id: uuid(),
  equipo: "Data Science",
  foto: " https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  favorito: true
}
  

  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Inovación y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])


  console.log(uuid())

  const cambiarMostar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color

  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo

    const crearEquipo = (nuevoEquipo) =>{
      console.log("Nuevo Equipo", nuevoEquipo);
      actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
    }

    //me gusta Corazzon

    const like = (id) => {
      console.log("Me gusta", id);
      const colaboradoresActualizados = colaboradores.map((colaborador)=>{
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
    }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}

      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}

      />
      }


      <MiOrg cambiarMostar={cambiarMostar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo} key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} 
          like={like} 
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
