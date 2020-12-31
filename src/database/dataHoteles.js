import foto1 from '../assets/imgs/nh1.jpg'
import foto2 from '../assets/imgs/nh2.jpg'
import foto3 from '../assets/imgs/nh3.jpg'
import foto4 from '../assets/imgs/nh4.jpeg'
import fotor1 from '../assets/imgs/tresreyes1.jpg'
import fotor2 from '../assets/imgs/tresreyes2.jpg'
import fotor3 from '../assets/imgs/tresreyes3.jpg'
import fotor4 from '../assets/imgs/tresreyes4.jpg'
import fotoar1 from '../assets/imgs/hotelargentino1.jpg'
import fotoar2 from '../assets/imgs/hotelargentino2.jpg'
import fotoar3 from '../assets/imgs/hotelargentino3.jpg'
import fotoar4 from '../assets/imgs/hotelargentino4.jpg'

export const hotelsData = [
    {
      id: '1',
      name: 'Hotel NH Buenos Aires',
      photo: [foto1,foto2,foto3,foto4],
      description: 'El NH City Buenos Aires, de 5 estrellas, está situado en el distrito histórico de Buenos Aires y cuenta con una impresionante fachada de estilo Art Déco y un interior impresionante. Tiene pileta en la azotea con vistas panorámicas a la ciudad. Dispone de gimnasio y wifi gratis en todas las zonas.',
      servicios:['wifi', 'pileta', 'gimnasio', 'estacionamiento', 'bar','restaurant','sauna','SPA','TV', 'sala de juegos'],
      city: 'Buenos Aires',
      country: 'Argentina',
      habitacion: 'doble',
      price: '$5.500',
      stars: '5',
      adress:'Arenales 3689, CABA'
    },

    {
      id: '2',
      name: 'Gran Hotel Argentino',
      photo: [fotoar1,fotoar2,fotoar3,fotoar4],
      description: 'El Gran Hotel Argentino, situado a pocos metros de la Avenida 9 de Julio y a 300 metros del Obelisco, ofrece habitaciones confortables y fácil acceso al transporte público de Buenos Aires. Se proporciona wifi gratis. La Plaza de Mayo y la Casa Rosada se encuentran a 500 metros.',
      servicios:['wifi', '-', 'gimnasio', 'estacionamiento', 'bar','restaurant','-','-','TV', 'sala de juegos'],
      city: 'Buenos Aires',
      country: 'Argentina',
      habitacion: 'doble',
      price: '$3.500',
      stars: '3',
      adress:'Carlos Pellegrini 37, Buenos Aires'
    },

    {
        id:'3',
        name: 'Hotel dos Reyes',
        photo: [fotor1,fotor2,fotor3,fotor4],
        description: 'El Hotel Dos Reyes se encuentra en el centro, en la avenida Colón, a 300 metros de la playa y a 30 metros de la plaza Colón. Alberga un restaurante y una cafetería con encanto. Hay wifi gratis.',
        servicios:['wifi', 'pileta', 'gimnasio', 'estacionamiento', 'bar','restaurant','sauna','SPA','TV', 'sala de juegos'],
        city: 'Mar del Plata',
        country: 'Argentina',
        habitacion: 'doble',
        price: '$3.500',
        stars: '4',
        adress:'Av Colon 2129, Mar del Plata'
    }


]    