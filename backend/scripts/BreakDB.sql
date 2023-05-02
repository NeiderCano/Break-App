-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2022 a las 06:24:59
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `break`
--

-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS DB_Break;

USE DB_Break;

--
-- Estructura de tabla para la tabla `diagnostico_usuario`
--

CREATE TABLE `diagnostico_usuario` (
  `id_recomendacion` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `id_edad` varchar(10) DEFAULT NULL,
  `diagnostico_usuario` text DEFAULT NULL,
  `cantidad_diaria_agua` int(11) DEFAULT NULL,
  `comidas_al_dia` date DEFAULT NULL,
  `imc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `id_ejercicios` varchar(10) NOT NULL,
  `nombre_ejercicio` varchar(255) DEFAULT NULL,
  `dificultad_ejercicio` varchar(30) DEFAULT NULL,
  `repeticiones_ejercicio` varchar(5) DEFAULT NULL,
  `grupo_muscular` varchar(30) DEFAULT NULL,
  `equipo_entrenamiento` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `posicion_inicial` text DEFAULT NULL,
  `descripcion_ejercicio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`id_ejercicios`, `nombre_ejercicio`, `dificultad_ejercicio`, `repeticiones_ejercicio`, `grupo_muscular`, `equipo_entrenamiento`, `url`, `posicion_inicial`, `descripcion_ejercicio`) VALUES
('00010', 'Normal Bending', 'Sensillo II', '10x2', 'Pectorales', 'No', 'https://www.youtube.com/watch?v=e_EKkqoHxns&ab_channel=PatricioAlmir%C3%B3n', 'Túmbese boca abajo sobre la colchoneta', 'Se debe colocar ambas manos en el suelo a lo ancho de los hombros y luego estirar las piernas hasta formar una línea recta desde los hombros hasta los pies. Finalmente, manteniendo esta postura, se debe doblar los brazos y descender con el pecho en dirección al suelo hasta formar un ángulo de 90º con los codos, volviendo a subir a la posición inicial.'),
('00020', 'Isometric Bending', 'Sensillo II', 'Undef', 'Pectorales', 'No', 'https://cronicaglobal.elespanol.com/uploads/s1/10/06/51/92/plancha-isometrica.jpeg', 'Túmbese boca abajo sobre la colchoneta', 'se debe realizar una flexión normal, pero, luego de descender el pecho hasta el suelo con los codos en ángulo de 90º, se debe sostener esa posición por 15 segundos. En todo momento, también es importante mantener los abdominales bien contraídos para garantizar que se mantenga una línea recta desde los pies hasta la cabeza.\r\n'),
('00030', 'Archer Push-ups', 'Avanzado III', '10x2', 'Pectorales', 'No', 'https://www.youtube.com/watch?v=UmMN9oWSv20', 'Túmbese boca abajo sobre la colchoneta', 'Póngase en una posición como si estuviera a punto de hacer una flexión. Debe colocar una mano horizontalmente lejos de su cuerpo, de manera que el brazo quede totalmente estirado, Luego, se debe realizar el movimiento de descender con el pecho hasta el suelo, pero aplicando la fuerza solo en el lado del pecho que tiene la mano más cercana al cuerpo.\r\n\r\n'),
('00040', 'Declined flexion', 'Avanzado I', '20x2', 'Pectorales', 'Banco / silla / superficie', 'https://www.youtube.com/watch?v=2zpnA73VRds', 'Apóyese de un banco o una silla, Ponga sus manos sobre el suelo y los pies sobre la silla de forma que quede mirando boca abajo', 'Realice una flexión manteniendo los pies arriba de la silla en todo momento. Recuerde que la elevación no debe ser menor a los 20° ni mayor a 40°.\r\n'),
('00050', 'Explosive Push Up', 'Intermedio II', '10x3', 'Pectorales', 'No', 'https://www.youtube.com/watch?v=CvgV8W98inA&ab_channel=KidaFilm', 'Túmbese boca abajo sobre la colchoneta', 'Separa las piernas y ubica las manos a la altura de tus hombros en el suelo. Realice el movimiento básico de una flexión y a la hora de tocar el suelo con el pecho ascienda ejerciendo un alto grado de empuje, lo suficiente como para que sus manos se despeguen algunos milímetros del suelo.\r\n'),
('00060', 'Chest Dip', 'Avanzado II', '7x3', 'Pectorales', 'Barras Parelelas', 'https://www.youtube.com/watch?v=yN6Q1UI_xkE', 'Ubique sus manos en las barras paralelas con sus codos en un ángulo de 90°', 'Procure que sus piernas no toquen el suelo de tal modo que el trabajo esté localizado en el tren superior. Incline su cuerpo hacia adelante y comienza a flexionar sus codos procurando formar un ángulo de 90° respecto la posición de sus codos y la de sus hombros. Una vez realizado este movimiento ascienda con fuerza.\r\n\r\n'),
('00070', 'Dumbbell Floor Press', 'Intermedio I', '10x3', 'Pectorales', 'Mancuernas', 'https://www.youtube.com/watch?v=uUGDRwge4F8', 'Disponga su cuerpo boca arriba sobre una colchoneta', 'Flexiones sus rodillas para tener una mayor estabilidad. Ubique sus brazos con los codos apuntando hacia afuera en relación con su cuerpo, levante las mancuernas en un ángulo de 90° hacia arriba manteniendo las muñecas rectas y firmes hasta llegar a la altura máxima que le permitan sus brazos. Regrese de forma lenta a la posición inicial.\r\n\r\n'),
('00080', 'Band Chest Fly', 'Intermedio I', '12x3', 'Pectorales', 'Bandas elásticas', 'https://www.youtube.com/watch?v=yVcEkvgymt8', 'Ubique las bandas elásticas en un sitio estable, ponga cada extremo de la banda en sus manos', 'De un paso adelante generando tensión en la banda. Manteniendo lo codos bloqueados comience a empujar hacia adelante la banda elástica con sus brazos haciendo especial énfasis en la intervención del pectoral.\r\n\r\n'),
('00090', 'One arm push up', 'Avanzado II', '5x2', 'Pectorales', 'No', 'https://www.youtube.com/watch?v=5WePSA7zZHE', 'Ubíquese boca abajo sobre una colchoneta, separe sus piernas para lograr estabilidad', 'Ponga sus brazos en la posición flexión tradicional con la diferencia de que va a usar uno solo de sus brazos en lugar de ambos al momento de descender y ascender al realizar el movimiento de la flexión.\r\n\r\n'),
('00100', 'Spartan Push Up', 'Intermedio III', '7x3', 'Pectorales', 'No', 'https://www.youtube.com/watch?v=qD8GRkHKndY', 'Ubíquese boca abajo sobre una colchoneta, separe sus piernas para lograr estabilidad', 'Levanta las caderas y los muslos del suelo hasta que el cuerpo esté paralelo al suelo. Activa el core y asegúrate de que el cuerpo forma una línea recta desde la cabeza a los pies. Clava la pelvis para asegurarte de que la espalda está recta. No dejes que la espalda baja (la región lumbar) se hunda ni se levante. En la región torácica, lleva los hombros arriba y abajo.\r\n\r\n'),
('100010', 'Wall Wrist Push-ups\r\n\r\n', 'Sencillo II', '20X4', 'Antebrazos', 'No', 'https://www.youtube.com/watch?v=U3yop1fb484&ab_channel=CatBodiesGymnastics\r\n', 'Colocamos las muñecas sobre un muro.', 'Con las muñecas presionamos el muro aplicamos presión en el dorso de la mano e intentamos levantar ligeramente nuestro cuerpo con el impulso de la mano.\r\n'),
('1000100', 'Swings in Supination', 'Intermedio III', '15x4', 'Antebrazos', 'Barra', 'https://www.calistenia.net/wp-content/uploads/2017/10/Balanceos-en-Agarre-Supino.jpg\r\n', 'Nos colgamos sobre una barra de manera que nuestro cuerpo quede inclinado totalmente en una posición vertical.', 'Empezaremos balanceándonos lentamente hacía adelante y hacía atrás. La tensión siempre debe permanecer en los antebrazos, de lo contrario no olvide parar el entrenamiento.\r\n'),
('100020', 'Wrist Push-ups\r\n\r\n', 'Sencillo I', '10X2', 'Antebrazos', 'No', 'https://www.youtube.com/watch?v=YqVYCS_d5C4\r\n', 'Sentado en un banco con una mancuerna, apoyamos el brazo en el muslo con la palma hacia arriba.', 'Flexionamos la muñeca arriba y abajo ralentizando el movimiento tanto como podamos. También se puede realizar con la palma hacia abajo, pero con mucho menos peso para no hacerte daño con cada repetición. Busca más peso con el primer movimiento, y menos y más repeticiones con el segundo.\r\n'),
('100030', 'Barbell Bench Foream Curl', 'Intermedio II', '12X2', 'Antebrazos', 'No', 'https://www.youtube.com/watch?v=v57mioF7jQ4\r\n', 'Nos colocamos De rodillas apoyando los brazos en un banco', 'Flexionamos las muñecas arriba y abajo. Podemos ejecutarlo en pronación o supinación y siempre controlando el peso que vamos a mover para evitar lesiones inoportunas.\r\n'),
('100040', 'Chair Rise', 'Intermedio II', '12X2', 'Antebrazos', 'Silla/Mesa', 'https://www.poweringoffroad.com/es/wp-content/uploads/sites/2/2021/01/mejores-ejercicios-de-antebrazos-en-casa.jpg\r\n', 'Comenzamos poniéndonos boca abajo por debajo de la silla. Buscamos estar en una posición cómoda y tomamos la silla por sus patas delanteras.', 'Ahora comenzamos a levantar la silla ligeramente del suelo, para probar su peso y evitar lesiones en la muñeca, intenta probar con una silla que oscile entre 15 - 25 Kg. (para empezar) Ahora que probamos el peso de la silla, comenzamos a moverla hacía adelante y hacía atrás generando toda la tensión en los antebrazos.\r\n'),
('100050', 'Disc Lift', 'Intermedio II', '12X2', 'Antebrazos', 'Disco/Mancuerna', 'https://www.youtube.com/watch?v=-vegApdT_ls&ab_channel=PREFIT-X\r\n', 'Tomaremos una mancuerna. Podemos hacer el ejercicio de pie o sentados.', 'Sujetamos el disco por el centro y lo levantaremos ligeramente moviendo únicamente el antebrazo.\r\n'),
('100060', 'Wrist Curls', 'Intermedio II', '15X3', 'Antebrazos', 'Mancuerna', 'https://www.youtube.com/watch?v=esOfrrIx5Zk\r\n', 'Tomaremos una mancuerna. Podemos hacer el ejercicio de pie o sentados.', 'Subir y bajar la pesa moviendo únicamente la muñeca. Es importante hacerlo de forma lenta y controlada para no provocar una lesión. Ejerceremos siempre la tensión en los antebrazos, e intentaremos involucrar los grupos musculares cercanos a estos lo menor posible para obtener mejores resultados.\r\n'),
('100070', 'Wrist Extension', 'Intermedio II', '20X4', 'Antebrazos', 'Pared/Mesa/Mancuerna/Disco', 'https://www.youtube.com/watch?v=esOfrrIx5Zk\r\n', 'En posición de pie recostaremos los brazos contra la pared, de tal manera que el dorso de nuestra mano quede mirando hacía abajo y sujetamos con nuestras manos una mancuerna.', 'Iniciamos con nuestras manos firmemente colocadas sobre un muro o base sólida, nuestras manos siempre deben mantenerse extendidas en posición horizontal, de manera que nuestra muñeca quede por fuera de la superficie. En adelante comenzamos a hacer ligeras extensiones de muñeca y ejercemos toda nuestra tensión en nuestro antebrazo.\r\n'),
('100080', 'Barbell Wrist Lift', 'Intermedio II', 'Undef', 'Antebrazos', 'Mancuerna/Barra', 'https://www.youtube.com/watch?v=Q6GYRlK7q2s&ab_channel=ATHLEAN-X%E2%84%A2\r\n', 'Pondremos una barra en el suelo sobre dos bloques.\r\nNos recostamos boca abajo sobre el suelo y nos ponemos en posición para realizar una flexión.', 'Tomaremos la barra de tal manera que nuestras palmas miren hacia el suelo. Una vez colocadas de esta manera, permaneceremos así durante 30 segundos.\r\n'),
('100090', 'Push Up with Arm Hold', 'Intermedio I', '12x2', 'Antebrazos', 'Mancuerna/Barra', 'https://www.youtube.com/watch?v=W6MUBVBVcaU&ab_channel=eHowFitness\r\n', 'Pondremos una barra en el suelo sobre dos bloques.\r\nNos recostamos boca abajo sobre el suelo y nos ponemos en posición para realizar una flexión.', 'Tomaremos la barra de tal manera que nuestras palmas miren hacia el suelo. Una vez colocadas de esta manera, permaneceremos así durante 30 segundos.\r\n'),
('10010', 'Low Plank', 'Sencillo III', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=0vuO3tMTYSY&t=3s', 'Túmbese boca abajo. Doble los codos justo debajo de los hombros y pon los antebrazos en el suelo. Estira las piernas y descansa los metatarsos en el suelo.', 'Levanta las caderas y los muslos del suelo hasta que el cuerpo esté paralelo al suelo. Activa el core y asegúrate de que el cuerpo forma una línea recta desde la cabeza a los pies. Clava la pelvis para asegurarte de que la espalda está recta. No dejes que la espalda baja (la región lumbar) se hunda ni se levante. En la región torácica, lleva los hombros arriba y abajo.\r\n\r\n'),
('10020', 'Hight Plank', 'Sencillo I', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=j1534Y2G5CE', '“Ponte a cuatro patas. Pon las manos a la anchura de los hombros justo debajo de los hombros. Mantén los codos ligeramente flexionados.”', 'Estira las piernas y descansa los metatarsos del pie en el suelo. El cuerpo debería estar en posición diagonal con respecto al suelo. Activa el core y asegúrate de que el cuerpo forma una línea recta de la cabeza a los pies. Clava la pelvis para asegurarte de que la espalda está recta. No dejes que la espalda baja (la región lumbar) se hunda ni se levante. En la región torácica, lleva los hombros arriba y abajo.'),
('10030', 'Bridge', 'Sencillo II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=GXJd909mChk', 'Túmbate boca arriba y descansa la cabeza en el suelo. Flexiona las rodillas para que los talones estén justo bajo las rodillas. Mantén los brazos a los lados con las palmas hacia abajo.', 'Clava la pelvis para asegurar que tienes la espalda baja recta (la región lumbar). En la región torácica, lleva los omóplatos arriba y abajo. Levanta las caderas hacia arriba hasta que estén totalmente estiradas y aguanta en esta posición durante 10 segundos mientras aprietas los glúteos. Luego baja las caderas, sin tocar el suelo, y repite el ejercicio.'),
('10040', 'Superman', 'Intermedio II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=tce6pgYMNlI', 'Túmbate boca abajo. Estira los brazos hacia adelante, con las palmas hacia abajo.', 'Levanta la parte superior del cuerpo y luego las piernas, formando un arco. Asegúrate de que las rodillas y el pecho no tocan el suelo. Mantén la cabeza y el cuello neutrales. No estires demasiado el cuello y mantén la barbilla clavada. Puedes aumentar o reducir la tensión del cuerpo levantando o bajando un poco la parte superior del cuerpo y/o las piernas de forma simultánea.'),
('10050', 'Superman Pull', 'Intermedio III', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=9HljjDQbti8&ab_channel=CJWashington.Jr', 'Túmbate boca abajo. Estira los brazos hacia adelante, con las palmas hacia abajo.', '\r\nLevanta la parte superior del cuerpo y luego las piernas, formando un arco. Asegúrate de que las rodillas y el pecho no tocan el suelo. Mantén la cabeza y el cuello neutrales. No estires demasiado el cuello y mantén la barbilla clavada. Puedes aumentar o reducir la tensión del cuerpo levantando o bajando un poco la parte superior del cuerpo y/o las piernas de forma simultánea.\r\nAl arquear el cuerpo flexionar los codos hacía atrás, intentando ponerlos en la espalda. luego devolver los brazos a su posición inicial y bajar para repetir.'),
('10060', 'Quadruped Limb Raises', 'Sencillo II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?time_continue=29&v=-vjas8g8iA0&feature=emb_logo', 'Ponte a cuatro patas. Pon las manos a la anchura de los hombros y justo bajo los hombros. Dobla los codos ligeramente.  Pon las rodillas justo bajo las caderas. El cuerpo debería estar paralelo al suelo. Asegúrate de que el cuerpo forma una línea recta desde la cabeza hasta los glúteos. En la región torácica, lleva los hombros arriba y abajo.', 'Estira el brazo derecho hacia adelante y la pierna izquierda hacia atrás mientras mantienes la espalda recta. Aguanta en esta posición de tres a diez segundos y luego baja hasta la posición inicial. Repite en cada lado.'),
('10070', 'Push Up', 'Intermedio II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=Uway3mQmMls&t=22s', 'Ponte a cuatro patas. Pon las manos a la anchura de los hombros y justo bajo los hombros. Dobla ligeramente los codos. Estira las piernas y descansa los metatarsos en el suelo. Activa el core y asegúrate de que el cuerpo forma una línea recta desde la cabeza a los pies. En la región torácica, lleva los omóplatos arriba y abajo.', 'Baja la parte superior del cuerpo y las caderas simultáneamente. Asegúrate de que activas el core durante todo el movimiento. Mantén los codos clavados y cerca del cuerpo, inspira a medida que vas bajando y espira a medida que te levantas.'),
('10080', 'Cat-Cow', 'Sencillo II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=kqnua4rHVVA&ab_channel=Howcast', 'Comience poniéndose en posición de gateo con las manos y las rodillas levantando su cuerpo. Los brazos deben estar debajo de sus hombros y sus piernas extendidas al nivel de la cadera', 'En la postura del gato invierte la curva de la columna vertebral. El coxis debe comenzar a moverse hacia arriba y el pecho moverse hacia delante y hacía arriba. El cuello debe extenderse arriba de la columna vertebral.\r\nNo dejes caer la cabeza hacía atrás.'),
('10090', 'Tabe Top Crunches', 'Intermedio II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=kqnua4rHVVA&ab_channel=Howcast', 'Acuéstese de espaldas con las piernas en posición de tableTop (Como si estuvieran recargadas en una mesa) Y pon las manos detrás de la cabeza.', 'Mantenga sus piernas extendidas en la posición de tableTop. Y realice ligeros abdominales sin separar la parte baja de sus espalada del suelo. Siempre mantenga sus manos detrás de la cabeza mientras empuja su torso hacia arriba y se deja caer.'),
('10100', 'Low Plank Knee Drops', 'Intermedio III', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/shorts/v_AumV8gVIw?&ab_channel=KiryaKolesnikov', 'Ponga sus codos sobre la colchoneta y extienda su cuerpo ligeramente hacía arriba, sus pies deben estar en cuclillas ayudándole a levantar su peso. Mantenga su cadera flexionada apuntando hacia arriba. Sus glúteos deben quedar en la posición más alta.', 'Incline sus rodillas y el metatarso intentando tocar con sus rodillas la superficie del suelo. Y luego repita el movimiento volviendo a su posición inicial'),
('11010', 'Standing Calf', 'Sencillo I', '15x2', 'Pantorrillas', 'No', 'https://www.youtube.com/watch?v=BgJ03QEtD3M\r\n', 'La posición inicial parte estando de pie, con las rodillas ligeramente flexionadas, ambos pies separados y apuntando hacia el frente.', 'Debes realizar una flexión del musculo, para ello tendrás que pararte en la punta de tus pies. Se recomienda llegar a la máxima extensión que te sea posible y de forma dinámica. Una vez termines repite desde la posición inicial.\r\n'),
('11020', 'Isolated Calf', 'Intermedio I', '15x2', 'Pantorrillas', 'No', 'youtube.com/shorts/B-n0it4djiE\r\n', 'La posición inicial parte estando de pie, con las rodillas ligeramente flexionadas, la pierna que va a trabajar debe estar ubicada en el suelo mientras que la contraria debe estar elevada.', 'Vas a realizar una flexión del músculo, para ello tendrás que pararte en la punta de tus pies. Procura realizar este ejercicio de manera controlada. Una vez finalices la flexión regresa a la posición inicial y repite.\r\n'),
('11030', 'Sitting Calf', 'Intermedio I', '20x2', 'Pantorrillas', 'No', 'https://www.youtube.com/watch?v=xz7sqxaJ-Ck&ab_channel=KAGED\r\n', 'Debes sentarte procurando mantener la espalda recta. Sitúa el peso sobre las rodillas bien distribuido.', 'Realizar la flexión controlada del músculo elevando de forma lenta tus rodillas con el peso. Una vez llegues al punto más alto vuelve a la posición inicial y repite el procedimiento.\r\n'),
('11040', 'Jump Rope', 'Sencillo II', '90 se', 'Pantorrillas', 'Cuerda', 'https://www.youtube.com/watch?v=FJmRQ5iTXKE\r\n', 'Coloca tus codos flexionados cerca de tus costados, no deberían moverse. Separa las piernas y flexiona ligeramente las rodillas.', 'Salta sobre la punta de tus pies procurando mantener la tensión en las pantorrillas durante el tiempo que logres aguantar.\r\n'),
('11050', 'Isometric Calf Squats', 'Sencillo I', '60 se', 'Pantorrillas', 'No', 'https://youtu.be/KIOczfJz0Yo\r\n', 'Ponte al frente de una pared con las piernas separadas y las rodillas ligeramente flexionadas.', 'Eleva la pierna que no vas a usar para el ejercicio y flexiona la pantorrilla de la pierna que está situada en el suelo. Procura mantener la tensión tanto tiempo como sea posible.\r\n'),
('11060', 'Calf Bridge', 'Sencillo III', '30 se', 'Pantorrillas', 'Caja/Superficie elevada', 'https://www.youtube.com/watch?v=dVuYZpDsto0\r\n', 'Recuéstate en el suelo, separa tus piernas y flexiona tus rodillas.', 'Ubica la punta de tus pies sobre una superficie elevada y procede a empujar tu cadera hacia arriba manteniendo la tensión en la parte inferior de tu cuerpo.\r\n'),
('11070', 'Hindu Squat', 'Intermedio II', '15x2', 'Pantorrillas', 'Caja/Superficie elevada', 'https://www.youtube.com/watch?v=NZ4BaMVJatE\r\n', 'Estando de pie vas a separar tus piernas a la altura de tus hombros, vas a flexionar tus pantorrillas para sobre la punta de tus pies mientras mantienes tu espalda recta.', 'Vas a flexionar tus rodillas hasta realizar el movimiento de una sentadilla tradicional con la diferencia de que vas a poder descender incluso más por la mecánica de este ejercicio. Una vez abajo vas a ascender manteniendo el control del ejercicio.\r\n'),
('11080', 'Isometric Calf Squat', 'Avanzado I', '90 se', 'Pantorrillas', 'No', 'https://www.youtube.com/watch?v=9VJQoW0T4B8\r\n', 'Dándole la espalda a una pared vas a separar tus piernas a la altura de los hombros.', 'Vas a realizar el movimiento de la sentadilla y al momento de formar un ángulo recto y apoyando la espalda contra la pared vas a realizar la flexión de las pantorrillas para estar sobre la punta de tus pies. Vas a aguantar tanto tiempo como sea posible manteniendo la máxima tensión en el músculo.\r\n'),
('11090', 'Run', 'Sencillo I', '5 min', 'Pantorrillas', 'Calzado', 'https://www.youtube.com/watch?v=_kGESn8ArrU\r\n', 'Estando de pie con las piernas a la altura de los hombros.', 'Vas a dar pasas largos y rápidos procurando pisar con la zona que comprende el medio y punta de la suela del calzado. Vas a mantener un ritmo constante y debes balancear los brazos adelante y atrás.\r\n'),
('11100', 'Explosive Jump', 'Avanzado I', '5x5', 'Pantorrillas', 'Calzado', 'https://www.youtube.com/watch?v=Sgtlesh7LHw\r\n', 'Estando de pie con las rodillas ligeramente flexionadas y separadas a la altura de los hombros', 'Vas a realizar una sucesión de saltos explosivos hacia delante de forma ininterrumpida realizando el movimiento de sentadillas tradicional. Al momento de llegar al suelo es importante transferir la energía del impacto por todo el cuerpo.\r\n'),
('20010', 'Barbell Chin Up Row', 'Intermedio III', '10x4', 'Deltoides', 'Barra 20kg', 'https://www.youtube.com/watch?time_continue=17&v=zgXxvQ1LQhw&feature=emb_logo', 'Ponerse de pie con los pies y los hombros paralelos al suelo. Mantener la espalda erguida, mantener el Core activo mientras se sujeta la barra por debajo de los hombros y se mantiene la vista al frente', 'Flexionar los hombros al levantar la barra, esta debe levantarse hasta el mentón lo máximo posible. Siempre llevando los codos por encima de las muñecas.'),
('20020', 'Reverse Beetle', 'Intermedio II', 'Undef', 'Espalda', 'No', 'https://www.youtube.com/watch?v=E9Hm5hAYVTg&ab_channel=eHowFitness', 'Coloque su espalda sobre la colchoneta y mantenga sus piernas extendidas haciendo un tableTop. Extienda sus manos a los costados haciendo una cruz.', 'Lleve su rodilla derecha lo más cerca de su pecho posible y extienda su pierna izquierda lejos de su cuerpo, a su vez, a medida que acerca su pierna a su pecho intente tocar con su mano izquierda el talón de su pie derecho. Luego invierta los movimientos intercambiando con su mano derecha y su pie izquierdo.\r\nSus hombros y sus piernas nunca deben tocar el suelo. Siempre debe estar apoyado sobre su espalda media y baja.'),
('20030', 'Shoulder Push-Ups', 'Avanzado I', '10x4', 'Deltoides', 'No', 'https://www.youtube.com/watch?time_continue=6&v=oLPyqyExD8M&feature=emb_logo', 'Coloca las manos en el suelo a la altura de hombros manteniendo la cadera por encima del cuerpo. Sitúa la cabeza entre los brazos mirando a tus pies, manteniendo la espalda recta.', 'Flexiona los brazos llevando la cabeza los más cerca del suelo posible, y vuelve a la posición inicial. Recuerda mantener la espalda y las piernas rectas durante todo el ejercicio.'),
('20040', 'Climbers', 'Intermedio II', '20x4', 'Deltoides', 'No', 'https://www.youtube.com/watch?time_continue=28&v=UNBiOYnQLRo&feature=emb_logo', 'Póngase en una posición de flexión de brazos con el cuello recto y las manos extendidas por debajo de los hombros. Tu cuerpo debe formar una línea recta desde la cabeza hasta los talones.', 'Involucre su núcleo y lleve una rodilla a la vez hacia el codo opuesto mientras mantiene el pecho recto tanto como sea posible. Acelera al máximo manteniendo la forma correcta.'),
('20050', 'Dumbbell shoulder ress', 'Avanzado I', '15x4', 'Deltoides', 'Pesa', 'https://www.youtube.com/watch?v=0JfYxMRsUCQ&ab_channel=Bodybuilding.com', 'Con las piernas a la misma altura as caderas a continuación cogemos la barra las manos deben de estar colocadas un poco más allá de la anchura de los hombros debemos apoyar la barra en la parte superior del pecho ala altura de las clavículas\r\nPor último Recuerda que tu espalda debe estar recta', 'Consiste principalmente en empujar una barra olímpica que se encuentra apoyada sobre los hombros hasta encima de la cabeza para realizar el shoulder es necesario conocer la técnica al dedillo ya que quiénes no lo Ejecutan correctamente suelen acabar abandonando por molestias.'),
('20060', 'Alternate Front Raises', 'Sencillo I', '15x3', 'Deltoides', 'Mancuernas', 'https://youtu.be/c4EhnuYZQI8', 'Nos colocamos de pie, con los pies ligeramente separados y una mancuerna en cada mano.', 'con las palmas mirando hacia abajo. A continuación, contraemos el abdomen y elevamos un brazo hasta la altura de los hombros. Aguantamos unos segundos y descendemos lentamente. Regresamos a la posición inicial y realizamos el mismo movimiento con el brazo contrario'),
('30010', 'Dmbbell Biceps Curl', 'Intermedio I', '12x4', 'Bíceps', 'Mancuernas', 'https://www.youtube.com/watch?v=HU2lghjU29Y', 'Con dos mancuernas, con la espalda recta y en una posición cómoda estando de pie', 'eleve las mancuernas de forma alterna o al mismo tiempo manteniendo las piernas semiflexionadas. Intente realizar un pequeño giro de muñeca al levantar la mancuerna.'),
('30020', 'Hammer Biceps Curl', 'Intermedio I', '12x4', 'Bíceps', 'Mancuernas', 'https://www.youtube.com/watch?time_continue=20&v=5LxLRVPg2h8&feature=emb_logo', 'Toma dos mancuernas con los brazos extendidos y las palmas de las manos mirando hacía tu cuerpo.', 'Flexiona los brazos llevando las mancuernas hasta los hombros, y volviendo a la posición inicial. Evita mover los codos u hacer movimientos muy bruscos para evitar lesiones.'),
('30030', 'Supine Pull Ups', 'Intermedio III', '10x4', 'Bíceps', 'Barra horizontal', 'https://www.youtube.com/watch?v=qIibBRKO9g4', 'Empezamos agarrando la barra horizontal situada por encima nuestro, y las palmas mirando hacia su cuerpo', 'Intente levantar su propio peso llevando su barbilla a la altura de la barra. Después de ello vuelva a la posición inicial.'),
('30040', 'Scott Bicep Curl', 'Intermedio I', '15x3', 'Bíceps', 'Mancuernas/Banda elástica/Barra', 'https://www.youtube.com/watch?v=Ks5KNBSmw6A', 'Recostaremos la parte superior del brazo sobre la parte acolchada que queda debajo del nuestro brazo y frente al pecho. La palma de nuestra mano debe estar mirando siempre hacia delante.', 'Debemos sujetar el peso a la altura de los hombros para completar la primera parte. Posteriormente, inhalaremos aire mientras bajamos la barra o el peso que hayamos escogido hasta que nuestros brazos queden extendidos. Desde ese punto, volveremos al punto inicial.'),
('30050', 'Low Pulley Biceps Curl with Rope', 'Intermedio I', '12x4', 'Bíceps', 'Cuerda/Polea/Banda elástica', 'https://www.youtube.com/watch?v=NDsbR64Z5jU', 'De pie y con la espalda recta, Cogemos la cuerda con polea baja de forma que las manos superen la altura de los muslos.', 'flexionamos los dos brazos haciendo que los estribos de la cuerda giren hacia el exterior, sin separar el codo del cuerpo, soltamos el aire por la boca al subir. Tomamos siempre el aire por la nariz y estiramos los brazos a la posición inicial.'),
('30060', 'One Arm Low Pulley Curl', 'Intermedio II', '6x4', 'Bíceps', 'Cuerda/Polea/Banda elástica', 'https://www.youtube.com/watch?v=dF9vZfkCX5M', 'De pie y con la espalda recta, Cogemos la cuerda con polea baja de forma que una mano supere la altura de los muslos.', 'Flexionamos uno de los brazos haciendo que los estribos de la cuerda giren hacia el exterior, llegando a la altura de los hombros y sin separar el codo del cuerpo, soltamos el aire por la boca al subir. Tomamos siempre el aire por la nariz y estiramos el brazo a la posición inicial.'),
('30070', 'Overhead Pulley Curl', 'Intermedio I', '12x4', 'Bíceps', 'Cuerda/Polea/Banda elástica', 'https://www.youtube.com/shorts/V-Pvi5guFKk', 'De pie y con la espalda recta, Cogemos la cuerda con polea en alto de forma que las manos superen la altura de nuestra cabeza', 'Flexionamos uno de los brazos haciendo que los estribos de la cuerda giren hacia el exterior, sin separar el codo del cuerpo, soltamos el aire por la boca al subir. Tomamos siempre el aire por la nariz y estiramos el brazo a la posición inicial.'),
('30080', 'Barbell Curls', 'Intermedio I', '6x4', 'Bíceps', 'Barra/Mancuerna', 'https://www.youtube.com/watch?v=BVrlItPBX8M', 'Emplearemos una barra elevándola a la altura de nuestro pecho, en su parte superior. Las rodillas deben permanecer flexionadas y nuestro trasero hacia fuera con los brazos abiertos.', 'El pecho debemos mantenerlo hacia delante en todo momento. Una vez que esté levantado, se cambiará la posición de nuestras muñecas para que los brazos permanezcan más cerrados, con las palmas mirando hacia arriba. Los codos quedarán pegados al tronco y levantaremos la barra lentamente hasta flexionar completamente el brazo y volver a bajarla lentamente.'),
('30090', 'Diamond Push Ups', 'Intermedio III', '8x3', 'Bíceps', 'No', 'https://www.youtube.com/watch?v=XtU2VQVuLYs', 'Nos recostamos boca abajo sobre la colchoneta Las manos permanecerán en el suelo algo atrasadas respecto a nuestros hombros', 'Los dedos pulgar e índice deben permanecer en contacto. Elevaremos nuestro cuerpo extendiendo nuestros brazos y con nuestra mirada al frente y la espalda recta para bajar hasta tocar el suelo. Volvemos a nuestra posición inicial y repetimos.'),
('30100', 'Decline Bench Supine Bicep Curl', 'Avanzado II	', '15x2', 'Bíceps', 'Banco', 'https://www.youtube.com/watch?v=m9RfwfRAwHs', 'Nos colocamos de espaldas en un banco ligeramente inclinado (Preferiblemente entre 30° y 45°) dependiendo de la flexibilidad de pectoral y de hombro', 'Hombros, codos, y mancuernas deben estar alineados dibujando una trayectoria recta. Realizamos una contracción de ambos bíceps, realizando una flexión de codo intentando llevar el codo hacía atrás. Asegúrate siempre de llevar las mancuernas en la línea del hombro.'),
('40010', 'Narrow Push-Up', 'Intermedio II	', '12x3', 'Tríceps', 'No', 'https://www.youtube.com/watch?v=40LMvyHkUKw', 'Colóquese boca abajo sobre la colchoneta, y apoye su peso en la punta de sus pies y la palma de sus manos al nivel de sus hombros.', 'Flexione su antebrazo e intente tocar el suelo con el pecho, luego vuelva a su posición inicial.'),
('40020', 'Bench Dip', 'Sencillo I	', '6x3', 'Tríceps', 'Banco/Silla/Superficie', 'https://www.youtube.com/watch?v=EtPHEAOIxUU', 'Sobre una silla o cualquier superficie sobre la que pueda apoyarse, coloque sus manos sobre la superficie dándole la espalda, debe asegurarse de que sus pies no queden a más de 30° del suelo.\r\nLleve su brazo recto detrás de su torso lo más lejos que pueda y vea qué tan alto puede llegar a su codo', 'Recuéstese sobre la superficie Lleve su brazo recto detrás de su torso lo más lejos que pueda y vea qué tan alto puede llegar a su codo. Si siente mucha molestia intente colocarse en una superficie en la que encuentre la posición más cómoda'),
('40030', 'Seated Elbow Extension', 'Avanzado II	', '10x4', 'Tríceps', 'Banco/Mancuerna/Barra', 'https://www.youtube.com/watch?time_continue=10&v=Pe6BmmhF_Is&feature=emb_logo', 'Nos sentamos en un banco con una mancuerna o una barra y extendemos los brazos por encima de nuestra cabeza.', 'Flexionamos nuestros brazos de forma controlada hacía atrás, hasta que estos formen un ángulo cercano a los 90º. Luego volvemos a extenderlos por completo.'),
('40040', 'One arm Dumbbell Extension', 'Intermedio II	', '12x2', 'Tríceps', 'Mancuerna', 'https://www.youtube.com/shorts/eGI2k3DasHI', 'Nos ponemos de pie o sentados y permanecemos siempre con la espalda recta.', 'Flexionamos nuestro brazo de forma controlada hacía atrás, hasta que estos formen un ángulo cercano a los 90º. Luego volvemos a extenderlo por completo. (Repetir con cada brazo)\r\n'),
('40050', 'Triceps Pulley Horizontal Kick', 'Avanzado II	', '12x2', 'Tríceps', 'Poleas/Ligas', 'https://www.youtube.com/watch?v=1RhNVW6ilGk', 'Empezamos flexionando las rodillas con la espalda semi recta, un poco inclinada hacía el frente.', 'Tomamos la polea u tiramos hacía atrás, el hombro y los brazos deben quedar paralelos al suelo y luego realizamos una extensión de codo. (Sin perder el Angulo del codo) volvemos el brazo a la posición inicial.\r\n'),
('40060', 'French Press', 'Avanzado III	', '12x2', 'Tríceps', 'Banco horizontal/Barra', 'https://www.youtube.com/watch?v=EWBBZb81AIo&t=1s', 'Empezamos recostados sobre un banco o camilla con la espalda totalmente reclinada horizontalmente, nuestras piernas deben quedar en vertical de tal manera que el metatarso del pie pueda tocar el suelo. La barra debe permanecer posicionada al nivel de esternón.', 'Tomaremos la barra recta y la elevaremos de una manera que quede a la altura de nuestros hombros, esta inclinación nunca debe cambiar. Con el humero totalmente vertical, ejecutamos una flexión del codo sobre nuestra cabeza, luego extendemos la carga a la posición inicial.\r\n'),
('40070', 'Shouder Taps', 'Intermedio II', '12x2', 'Tríceps', 'No', 'https://www.youtube.com/watch?v=wcKyqAMqueQ&t=1s', 'Iniciamos poniéndonos boca abajo sobre la colchoneta con los brazos extendidos, como si se fuera a realizar una flexión normal.', 'Intentamos que una de nuestras manos toque nuestro hombro. Contrario, luego colocamos la mano que toca nuestro hombro a su posición inicial y repetimos el movimiento con la otra mano. (En caso de perder el equilibrio se puede usar una pared o superficie para apoyarse).\r\n'),
('40080', 'Inverted Row On Table', 'Intermedio II', '12x4', 'Tríceps', 'Mesa/Silla', 'https://www.youtube.com/watch?v=pbQW9cyXKqE&t=1s', 'Empezamos poniéndonos por debajo de una mesa, silla o superficie a la cual nos podamos aferrar mientras colgamos nuestro cuerpo por debajo de ella.', 'Lleva tu cuerpo hacia la mesa intentando que tus manos se acerquen a tu cadera hasta que tu pecho haga contacto con la mesa, y a partir de ahí vuelve progresivamente al punto inicial, hasta que tus codos se extiendan por completo.\r\n'),
('40090', 'Decline Push Ups', 'Intermedio III', '10x4', 'Tríceps', 'Mesa/Silla/Superficie', 'https://www.youtube.com/watch?v=SKPab2YC8BE', 'Ponemos los pies en una superficie elevada, no mayor a 40°, pues al ejecutar ele ejercicio podemos generar lesiones.', 'Realizamos una flexión normal manteniendo en todo los pies sobre la elevación, luego volvemos a la posición inicial.\r\n'),
('40100', 'Bench Tricep Curl', 'Intermedio III', '10x4', 'Tríceps', 'Mesa/Silla/Superficie', 'https://www.youtube.com/watch?v=PYapgguXgT8', 'Apoyamos las manos en el borde del banco de tal manera que le des la espalda. Los codos deben permanecer lo más cerca posible del cuerpo. La piernas deben estar ligeramente flexionadas y apoyadas sobre los talones', 'Bajamos con un movimiento lento y controlado hasta que los hombros formen un Angulo de 90°. Haciendo fuerza sobre los tríceps, vuelve paulatinamente a la posición inicial. Al volver a la posición inicial, evitamos en todo momento extender los brazos por completo al subir.\r\n\r\n'),
('50040', 'Lateral Lunge', 'Intermedio I', '15x2', 'Cuádriceps', 'No', 'https://www.youtube.com/watch?v=rvqLVxYqEvo', 'Estando de pie separe las piernas más allá de la altura de sus hombros hasta tener la necesidad de flexionarlas para mantenerse estable', 'Proceda flexionar una de sus piernas mientras la otra se extiende, una vez alcance la máxima tensión pase a la pierna opuesta.'),
('50050', 'Step Up', 'Sencillo I', '12x3', 'Cuádriceps', 'Escalón/Superficie Elevada', 'https://www.youtube.com/watch?v=l4AA5d5mInQ', 'Posicionado al frente del escalón o superficie elevada, dándole la cara y con una separación neutral de las piernas', 'Estando en esa posición vas a dar un paso hacia delante justamente sobre el escalón o superficie alta, impulsándote ligeramente con ambas piernas vas a llegar a la altura de la superficie ejerciendo presión en ambas piernas. Repite con la pierna opuesta.'),
('50060', 'Squat Jump', 'Intermedio II', '10x3', 'Cuádriceps', 'No', 'https://www.youtube.com/watch?v=A-cFYWvaHr0', 'Estando de pie con las piernas separadas, un poco más separadas que la altura de los hombros y manteniendo la espalda recta', 'Vas a ejecutar una flexión de las piernas, una vez forme un ángulo recto en el descenso vas a impulsarte para subir con la fuerza suficiente como para elevar tu cuerpo algunos milímetros del suelo.'),
('50070', 'Box Jump', 'Intermedio III', '10x3', 'Cuádriceps', 'Caja/Superficie elevada', 'https://www.youtube.com/watch?v=c-Yonc6lzUs', 'Estando de pie con las piernas separadas, más o menos a la altura de los hombros y con la espalda recta.', 'Vas a impulsarte para saltar y llegar arriba de la caja o superficie alta, este impulso vendrá de la flexión de tus piernas. No es necesario que tus piernas formen un ángulo recto en el descenso.'),
('50080', 'Reverse Lunge', 'Sencillo II', '12x2', 'Cuádriceps', 'No', 'https://www.youtube.com/watch?v=c-Yonc6lzUs', 'Estando de pie, con la espalda recta y las piernas ligeramente separadas una de la otra', 'Vas a realizar un paso hacia atrás, procurando que la pierna trasera llegué lo más lejos posible. En el proceso es necesario doblar ambas rodillas, la del frente formando un ángulo de recto y la trasera tendrá que rozar el suelo. Tras hacerlo es necesario impulsarse para volver a la posición original y repetir el ejercicio.'),
('50090', 'Single-leg Raise', 'Sencillo I', '15x2', 'Cuádriceps', 'No', 'https://www.youtube.com/watch?v=zo2pqw794B0', 'Recostado en el suelo vas a doblar una da tus piernas para tener estabilidad mientras que la otra va a realizar el movimiento', 'La pierna que no está doblada va a mantener la tensión y permanecer recta mientras que se ejerce la tensión necesaria para elevarla a un ángulo de 45°. Mantienes allí por un instante y regresas a la posición inicial.'),
('50100', 'Pistol Squat', 'Avanzado I', '15x2', 'Cuádriceps', 'No', 'https://www.youtube.com/watch?v=vq5-vdgJc0I', 'De pie con las piernas a la altura de los hombros', 'Vas a elevar una de las piernas procurando mantenerla recta. La otra va a realizar la flexión, es muy importante mantener la espalda recta y mantener la estabilidad.\r\nAl llegar lo más bajo posible vas a ejercer la tensión necesaria para elevarte y volver al a posición original.'),
('60010', 'Aducción Isométrica Con Pelota Entre Los Tobillos', 'Sencillo I', '15x2', 'Aductores', 'Pelota', 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/aducctor-isometrico-con-pelota-tumbado-7585.png', 'El ejecutante se coloca en decúbito supino y se coloca una pelota entre los tobillos.', 'Una vez la pelota es aguantada con los tobillos, se realiza una aducción de cadera isométrica apretando la pelota con los maléolos internos.\r\nDurante la ejecución, las rodillas deben mirar hacia arriba, evitando cualquier tipo de valgo de rodilla.'),
('60020', 'Side-lying Abduction', 'Sencillo II', '10x7', 'Aductores', 'Pelota', 'https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/encogimientos-con-aducctor-isometrico-2277.png', 'El ejecutante se coloca en decúbito supino y se coloca una pelota entre las rodillas.', 'En este caso, la fuerza contra la pelota debe hacerse con los cóndilos femorales de la cara interna de la rodilla.'),
('60030', 'Side-Lying Abduction', 'Sencillo I', '10x3', 'Aductores', 'No', 'https://vimeo.com/274983637', 'Recuéstese de lado en el piso. Apoye su cabeza sobre su brazo', 'Con la pierna más cercana al suelo totalmente estirada y con la pierna que está extendida, manteniendo la rodilla y el pie de la otra pierna pegados al suelo. Alce la pierna que está totalmente estirada a 45º.'),
('60040', 'Aducción de cadera de pie', 'Sencillo I', '10x3', 'Aductores', 'Sliders/Toalla', 'https://mundoentrenamiento.com/wp-content/uploads/2021/08/sliding-hip-aduction.webp', 'Tenga una posición recta y mande sus dos manos al pecho', 'Realizaremos una abducción de cadera deslizando la pierna poco a poco con la ayuda de la slider o la toalla.\r\nDespués tenemos que volver a la posición inicial, donde se realiza la aducción de la cadera.\r\n'),
('60050', 'Ejercicio Copenhague', 'Avanzado I', '3x3', 'Aductores', 'Silla/Acompañante', 'https://pbs.twimg.com/media/EKCRwU1XsAA5IIW?format=jpg&name=4096x4096', 'Se tumba de lado, de manera que la base de sustentación sea el antebrazo', 'En estos ejercicios para aductores, la pierna que más está trabajando es la que permanece sostenida por la silla o el entrenador, manteniendo una contracción isométrica de la musculatura aductora de la cadera.\r\n'),
('60060', 'Eccentric of Adductors With Rubber', 'Sencillo II', 'Undef', 'Aductores', 'Banda elástica', 'https://pbs.twimg.com/media/EKCRwU1XsAA5IIW?format=jpg&name=4096x4096', 'Debemos realizar aducciones de cadera en un amplio rango de movimiento mientras la pierna de soporte permanece total mente extendida.', 'La fase concéntrica se realiza una vez la pierna ejecutante y la pierna de soporte se tocan.\r\nCuando se llega a este punto, se aguanta 2 seg en isométrico, para seguidamente resistir la contracción excéntrica durante unos 3 seg hasta llegar al máximo rango de movimientos de abducción de cadera.\r\n'),
('60070', 'Levantamiento de Balón Suizo con las Piernas', 'Sencillo II', '15x3', 'Aductores', 'Balón de ejercicios', 'https://www.entrenamiento.com/wp-content/uploads/2016/04/levantamiento-bola-piernas-1.jpg', 'Acuéstate boca arriba, con los brazos cruzados delante del cuerpo. Si esto te resulta muy incómodo, también puedes apoyar el codo inferior en el suelo, y usarlo de palanca. Tu otro brazo debe quedar, en este caso, por encima de tu cabeza para no entorpecer el movimiento.', 'Ahora, coloca una bola grande de ejercicios entre tus pies y poco a poco súbela y bájala, utilizando solamente la fuerza de las caderas y las nalgas. Luego, vuelve a la posición inicial. Este movimiento cuenta como una repetición. Debes completar al menos 3 series de 15 repeticiones cada una.\r\n'),
('60080', 'Pose de la silla', 'Avanzado I', '4x3', 'Aductores', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2016/04/pose-silla-720x543.jpg', 'Ponte de pie, con las piernas juntas y las rodillas livianas. Ahora, junta las palmas de tus manos e inclina tu cuerpo hacia el lado derecho, de manera que tu pecho se encuentre con las rodillas.', 'Debes mantener esta posición, y hacer el movimiento más profundo en pequeñas pulsaciones, al menos 10 o 15, para ver los resultados de este curioso ejercicio.\r\nA continuación, cruza el codo izquierdo sobre el muslo derecho, y mantenlo así durante 5 o 10 segundos. Luego vuelve a tu posición inicial, e inténtalo del otro lado.\r\n'),
('60090', 'Oscilaciones de pierna', 'Sencillo I', '15x3', 'Aductores', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2016/04/oscilacion-pierna-720x369.jpg', 'Comienza de pie, con los pies juntos y los brazos semi extendidos.', 'Levanta tu pierna derecha hacia un lado, y déjala balancearse hacia el lado derecho. Luego hazla volver. Esto cuenta como una repetición.\r\n'),
('60100', 'Carrera con toalla', 'Sencillo I', '12x3', 'Aductores', 'Toalla', 'https://www.entrenamiento.com/wp-content/uploads/2016/04/carrera-toallas-720x540.jpg', 'Coloca las manos en el suelo y conduce tu pierna derecha hacia atrás.', 'Cambia rápidamente para que en el momento que tu pierna vaya a cambiar o subir, la otra haga el movimiento contrario.\r\n'),
('70010', 'Curvatura Delantera con Codos Flexionados', 'Sencillo II', '6x3', 'Tendón de la corva', 'No', 'https://www.hola.com/imagenes/estar-bien/20210625192025/posturas-yoga-pinza-beneficios-estiramiento/0-968-197/uttanasana-6a-a.jpg?filter=w360\r\n', 'Debes comenzar de pie, con los pies separados a suficiente distancia para que cada uno quede paralelo a ambos lados de la cadera.', 'Dobla la parte superior de tu cuerpo hasta alcanzar tus pantorrillas, sin flexionar las rodillas.\r\nPuedes cruzar los brazos sobre tu cabeza o dejarlos estirados y usarlos de apoyo.\r\nMantén todo el peso en tu parte delantera durante cinco respiraciones, mientras que tanto la zona lumbar como los músculos isquiotibiales se liberan momentáneamente de su carga.\r\n'),
('70020', 'Estiramiento Lateral Intenso', 'Sencillo II', '8x3', 'Tendón de la corva', 'No', 'https://despertarmental.com/wp-content/uploads/2020/12/Postura-intensa-de-estiramiento-lateral-Parsvottanasana-1-scaled.jpg\r\n', 'Extiende tu brazo izquierdo, apuntando hacia el techo. Puedes usar un bloque si se te hace un poco difícil mantener el equilibrio con un movimiento tan profundo.', 'Toda la parte superior de tu cuerpo debe estar erguida y bien estirada mientras mantengas la pose, que debe prolongarse por al menos por cinco respiraciones.\r\n'),
('70030', 'Medio Triángulo Unido', 'Sencillo II', '8x3', 'Tendón de la corva', 'No', 'https://c8.alamy.com/compes/g1jmcw/eps-10-ilustracion-vectorial-de-posturas-de-yoga-en-el-triangulo-plantean-g1jmcw.jpg\r\n', 'Este ejercicio comienza con una inhalación.', 'Mientras llenas tus pulmones, asegura la figura del triángulo con tus piernas, y al exhalar lleva tu brazo izquierdo por detrás del torso hasta agarrar tu muslo.\r\nMantén esta pose por al menos cinco respiraciones.\r\n'),
('70040', 'Media Luna Rotada', 'Sencillo I', '8x3', 'Tendón de la corva', 'No', 'https://s3.eu-west-3.amazonaws.com/foto-meditacionparalaansiedad.es/wp-content/uploads/2021/12/01150715/media-luna-yoga.jpg\r\n', 'Mientras inhalas, rompe la figura del triángulo hecha con tus piernas, y al exhalar planta tu mano izquierda en el suelo y levanta la derecha, apuntando al techo, aproximadamente a la altura de la izquierda.', 'Una de tus piernas debe quedar extendida en posición horizontal, mientras que la otra será tu centro de gravedad.\r\nMantén esta postura por al menos cinco respiraciones, cuidándote de no perder el equilibrio.\r\n'),
('70050', 'Guerrero Inverso Torcido', 'Avanzado II', '4x3', 'Tendón de la corva', 'No', 'https://thumbs.dreamstime.com/b/actitud-reversa-del-guerrero-de-la-yoga-53301310.jpg\r\n', 'Al inhalar, planta nuevamente la pierna levantada en el suelo, y entra en la pose de Guerrero.', 'Ahora exhala y tuerce todo tu cuerpo hacia la derecha, apoyando la mano de este mismo lado en la cadera o en la espalda baja.\r\nLevanta el brazo izquierdo, estirándolo lo más que puedas hacia el techo. Recuerda que debes mantener esta posición por cinco respiraciones.\r\n\r\n'),
('70060', 'Preparacion del Guerrero Inverso', 'Avanzado II', '4x3', 'Tendón de la corva', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2016/05/prep-guerrero-invertido-720x474.jpg\r\n', 'Inhala llevando tu rodilla externa al suelo, y al exhalar coloca tu codo izquierdo sobre el muslo derecho.', 'Junta tus palmas en posición de oración y mantén la posición por cinco largas respiraciones.\r\n\r\n'),
('70070', 'Rotación del guerrero', 'Avanzado I', '4x3', 'Tendón de la corva', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2016/05/guerrero-rotado-720x485.jpg\r\n', 'La siguiente pose solo se diferencia de la anterior por un movimiento.', 'Levanta la rodilla que estaba apoyada del suelo, y estira completa y firmemente la pierna. Mantén las manos en posición de oración y disfruta esta pose por cinco respiraciones más.'),
('70080', 'Triángulo Rotado', 'Avanzado I', '4x3', 'Tendón de la corva', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2016/05/triangulo-rotado2-720x405.jpg\r\n', 'Para la última pose volveremos a la figura del triángulo hecho con las piernas.', 'Mantén la misma torsión de la parte superior del cuerpo mientras inhalas, y vuelve a colocar tu pierna en el suelo.\r\nExtiende tus brazos mientras exhalas, apoyando la palma izquierda en el suelo como apoyo.\r\nDe ser necesario, puedes usar un bloque para ayudarte.\r\nRespira profundamente por cinco respiraciones, mirando hacia la mano levantada.\r\nUna vez culminada esta secuencia, repítela del lado izquierdo.'),
('70090', 'Peso Muerto a una Pierna con Kettlebell', 'Intermedio I', '10x4', 'Tendón de la corva', 'Kettlebell/Peso', 'https://www.entrenamiento.com/wp-content/uploads/2020/01/ejercicio-kettlebell-musculos-isquiotibiales-720x557.jpg\r\n', 'Los pies deben estar separados a la altura de las caderas, tu pie derecho debe estar firme en el suelo, mientras sostienes una pesa rusa ligera en tu mano izquierda.', 'Bisagra las caderas y dobla la rodilla derecha; al mismo tiempo, levanta la pierna izquierda y baja la pesa rusa hacia el suelo. Evita curvar la espalda.\r\nCuando tu pierna izquierda esté paralela al suelo, activa el músculo isquiotibial derecho para empujar las caderas hacia adelante y baja la pierna izquierda, volviendo a la posición inicial.\r\nRecuerda hacer una pausa antes de cada repetición y cambiar de pierna.'),
('70100', 'Curl Nórdico', 'Avanzado II', '8x3', 'Tendón de la corva', 'No', 'https://www.entrenamiento.com/wp-content/uploads/2020/01/ejercicio-isquiotibiales-nordico-720x540.jpg\r\n', 'Con tu cuerpo rígido y recto, arrodíllate apretando el core.', 'Inclina tu cuerpo hacia el suelo, mientras pones los brazos a los lados, y afincas firmemente tus rodillas.\r\nInclínate hasta que sientas presión en los isquiotibiales. Apóyate únicamente en esos músculos, para regresar a tu posición inicial.\r\n'),
('80010', 'Sentadilla', 'Intermedio II', '15x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=l7aszLSPCVg&t=3s', 'Desde la posición de pie, mirada al frente con pies abiertos a la anchura de los hombros y puntas ligeramente hacia afuera.', 'Baja con la espalda recta y sacando ligeramente el culo hacia afuera, flexionando la cadera y rodillas unos 90 grados, aproximadamente. Después, vuelve a la posición inicial. Los brazos pueden extenderse hacia adelante para ayudarte en la ejecución.\r\n'),
('80020', 'Zancadas Alternas', 'Intermedio II', '14x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=XlIHSyVGDkA&t=1s', 'Empieza desde una posición de bipedestación', 'Da un paso largo hacia adelante hasta que la rodilla de la pierna trasera tenga contacto con el suelo. Vuelve a la posición inicial e intercambia el pie que avanzas.\r\n');
INSERT INTO `ejercicios` (`id_ejercicios`, `nombre_ejercicio`, `dificultad_ejercicio`, `repeticiones_ejercicio`, `grupo_muscular`, `equipo_entrenamiento`, `url`, `posicion_inicial`, `descripcion_ejercicio`) VALUES
('80030', 'Peso Muerto', 'Avanzado I', '14x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=7KL8SgCP4KQ&t=142s', 'La posición inicial será en bipedestación, con las piernas un poco más abiertas que la anchura de los hombros.', 'Comienza a bajar las piernas con el pecho mirando al frente, lanzando el glúteo ligeramente hacia atrás (como si quisieras sentarte) y tratando de bajar con la espalda lo más recta posible. Con ambas manos a la vez, agarra el objeto con fuerza y tira hacia arriba. Hazlo usando la fuerza de las piernas y la espalda, evitando que los brazos participen en este movimiento.\r\n'),
('80040', 'Zancada Lateral', 'Avanzado I', '13x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=6mDKhdmTjao&t=135s', 'La posición inicial es de pie, con la espalda recta, mirada al frente y los pies apoyados en el suelo.', 'Desplaza de forma horizontal una de las piernas (puedes hacerlo deslizándola por el suelo o levantándola). La pierna que se desplaza debe quedar completamente estirada, mientras que la pierna de apoyo permanecerá en una flexión de 90 grados. Recoge la pierna desplazada volviendo a la posición inicial.\r\n'),
('80050', 'Step-Up Alterno', 'Intermedio I', '14x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=0xfTQJ2uik8', 'La posición inicial será la de bipedestación frente a una superficie más alta (puede ser una escalera, un cajón, una silla o un banco).', 'Primero despega una pierna del suelo hasta apoyarla en la superficie más alta. Después, la pierna que permanecía en el suelo, se despegará para colocarse al lado de la otra en la superficie más alta. Finalmente, la vuelta a la posición inicial se hará a la inversa, de tal manera que esa misma pierna que ha sido la última en subir regresará de nuevo al suelo y después le seguirá la otra. Y la siguiente repetición se empezará con la pierna contraria para alternarlas.\r\n'),
('80060', 'Frog Pump', 'Intermedio II', '15x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=QZypmmBVsh0&t=3s', 'Túmbate boca arriba sobre el suelo.', 'Colocando las plantas de los pies unidas empujándose la una contra la otra, de tal manera que las rodillas caigan hacia los lados Desde esta posición eleva el glúteo hacia arriba sin perder la linealidad del tronco. Desciende hasta la posición inicial.\r\n'),
('80070', 'Patada Glúteo en Cuadrupedia', 'Avanzado I', '10x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=jX4ojYiFYAg', 'La posición inicial es en cuadrupedia, con rodillas y manos apoyadas en el suelo.', 'Coloca las manos abiertas a la anchura de los hombros y las rodillas rectas, justo debajo de las caderas. Empieza primero con una pierna, manteniendo la rodilla doblada a 90 grados y elevando la pierna hasta que esté al nivel de la cadera. Después baja la rodilla hasta llegar casi al suelo y repite el movimiento. Una vez que hayas completado las repeticiones con una pierna, cambia y repite lo mismo con la otra pierna.\r\n'),
('80080', 'Abducción Patada Lateral', 'Intermedio II', '13x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=dILxTvY88uI\r\n', 'La posición inicial es tumbada sobre un costado con las piernas totalmente extendidas, una encima de la otra.', 'Eleva la pierna de encima hacia arriba unos 45-70 grados aproximadamente (Después vuelve a la posición inicial –sin dejar que se apoye del todo la pierna sobre la de abajo– y repite la ejecución. Cuando termines las repeticiones realiza lo mismo con el otro costado.\r\n'),
('80090', 'Patada de Abductores', 'Intermedio I', '14x5', 'Glúteo', 'No', 'https://www.youtube.com/watch?v=Ee_JQ71XcyI&t=1s\r\n', 'La posición inicial es tumbada sobre un costado.', 'La pierna inferior deberá permanecer estirada, sin tocar el suelo, mientras que la superior estará flexionada y servirá de apoyo contra el suelo. Una vez colocada en la posición inicial, sube y baja dinámicamente la pierna inferior.\r\n'),
('90010', 'Sit up', 'Sencillo II', '14x5', 'Abs', 'No', 'https://www.youtube.com/watch?v=6yiO3DxFscc\r\n', 'Tumbado en el suelo completamente.', 'Sin separar las piernas del suelo y haciendo fuerza con el abdomen hay que levantarse hasta llegar a los 90º con las piernas, la posición de los brazos es libre.\r\n'),
('90020', 'Crunch con Piernas Elevadas', 'Intermedio I', '14x5', 'Abs', 'No', 'https://www.youtube.com/watch?v=z_81MeSNohU\r\n', 'Acostado boca arriba, y teniendo las piernas a un ángulo aproximado de 90°.', 'Con las piernas elevadas aproximadamente a 90º, intenta tocar la punta de los pies con las manos\r\n'),
('90030', 'Sit Up con Med Ball', 'Intermedio I', '14x5', 'Abs', 'Balón', 'https://www.youtube.com/watch?v=WW0Kg3AGp_A\r\n', 'Acostado boca arriba, y teniendo las piernas a un ángulo aproximado de 90° y teniendo un balón con las manos.', 'Igual que el sit up original, pero con el handicap de utilizar material pesado, en este caso un balón medicinal.\r\n'),
('90040', 'Elevación de Piernas', 'Intermedio I', '14x5', 'Abs', 'No', 'https://www.youtube.com/watch?v=oxJj5FoBycQ\r\n', 'Con el cuerpo totalmente tumbado en el suelo y las manos en la zona lumbar (impidiendo la curvatura con la realización de este ejercicio)', 'levanta las piernas totalmente estiradas hasta llegar a los 90º, al bajar, dependiendo de tu nivel, puedes tocar o no en el suelo.\r\n'),
('90050', 'Crunch Invertido', 'Intermedio II', '14x5', 'Abs', 'No', 'https://www.youtube.com/watch?v=S_Dfyqi68aw\r\n', 'Sólo toca el suelo la espalda, los brazos y la parte alta del coxis.', 'Haciendo fuerza con el abdomen, separa la parte baja de la espalda del suelo y vuelve a la posición inicial.\r\n'),
('90060', 'Plancha Inferior con Glidings', 'Intermedio III', 'Undef', 'Abs', 'No', 'https://www.youtube.com/watch?v=nR7J73LCL1w&ab_channel=Isabelonmytrainingshoes\r\n', 'Boca abajo con los brazos estirados y las manos apoyadas en el suelo', 'sitúa los pies en los glidigns y el movimiento se inicia con las piernas totalmente estiradas y se acercan las rodillas al pecho.\r\n'),
('90070', 'La Bicicleta', 'Intermedio I', 'Undef', 'Abs', 'No', 'https://www.youtube.com/watch?v=7oM8M9JWLJw\r\n', 'Boca arriba con las manos en la nuca y las piernas elevadas', 'lleva los codos a tocar la rodilla de la pierna contraria, vuelve a la posición inicial y repite el movimiento a la inversa.\r\n'),
('90080', 'Plancha con Fitball', 'Intermedio III', 'Undef', 'Abs', 'Fitball', 'https://www.youtube.com/watch?v=PMTVEQmftX8\r\n', 'Posición de plancha abdominal con la particularidad de colocar los antebrazos en la fitball.', 'Mantener la posición isométrica lo mayor posible.\r\n'),
('90090', 'Pasar la Fitball desde las Piernas a los Brazos\r\n', 'Intermedio III', '14X5', 'Abs', 'Fitball', 'https://www.youtube.com/watch?v=PMTVEQmftX8\r\n', 'Acostado boca arriba.', 'Este ejercicio es una mezcla entre un sit up con pelota y las elevaciones de las piernas, con la particularidad de ir pasando el balón de las piernas a los brazos y viceversa.\r\n'),
('90100', 'Crunch Isométrico\r\n', 'Intermedio II', 'Undef', 'Abs', 'No', 'https://www.youtube.com/watch?v=V0lZycw_fDs\r\n', 'ABoca arriba apoyado en la espalda, y colocando una fitball en los codos y rodillas.', 'Codos y rodillas apoyados en una fitball intentando hacer el máximo de fuerza posible durante el máximo tiempo.\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedades`
--

CREATE TABLE `enfermedades` (
  `id_enfermedad` varchar(10) NOT NULL,
  `categoría_enfermedad` varchar(255) DEFAULT NULL,
  `nombre_enfermedad` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nutricion`
--

CREATE TABLE `nutricion` (
  `id_alimento` varchar(10) NOT NULL,
  `nombre_alimento` varchar(255) DEFAULT NULL,
  `categoria_alimento` varchar(20) DEFAULT NULL,
  `propiedad_nutricional` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pagos` varchar(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `tipo_tarjeta` varchar(100) DEFAULT NULL,
  `nro_de_tarjeta` varchar(20) DEFAULT NULL,
  `fecha_limite` date DEFAULT NULL,
  `ccv` varchar(20) DEFAULT NULL,
  `tiempo_de_suscripcion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_usuario`
--

CREATE TABLE `perfil_usuario` (
  `id_usuario` int(10) NOT NULL,
  `id_recomendacion` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

CREATE TABLE `platillos` (
  `id_platillo` varchar(10) NOT NULL,
  `nombre_alimento` varchar(255) DEFAULT NULL,
  `nombre_platillo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos_usuario`
--

CREATE TABLE `platillos_usuario` (
  `id_usuario` int(10) NOT NULL,
  `id_platillo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rango_edad`
--

CREATE TABLE `rango_edad` (
  `id_edad` varchar(10) NOT NULL,
  `edad_usuario` date DEFAULT NULL,
  `rango_edad` varchar(10) DEFAULT NULL,
  `diagnostico_edad` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_usuario`
--

CREATE TABLE `registro_usuario` (
  `id_usuario` int(10) NOT NULL,
  `id_enfermedad` varchar(10) DEFAULT NULL,
  `id_alimento` varchar(10) DEFAULT NULL,
  `id_ejercicios` varchar(10) DEFAULT NULL,
  `id_pago` varchar(10) DEFAULT NULL,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `correo_usuario` varchar(255) DEFAULT NULL,
  `contrasena` varchar(256) DEFAULT NULL,
  `sexo_usuario` varchar(10) DEFAULT NULL,
  `peso_usuario` int(11) DEFAULT NULL,
  `estatura_usuario` decimal(10,0) DEFAULT NULL,
  `edad_usuario` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `diagnostico_usuario`
--
ALTER TABLE `diagnostico_usuario`
  ADD PRIMARY KEY (`id_recomendacion`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`id_ejercicios`);

--
-- Indices de la tabla `enfermedades`
--
ALTER TABLE `enfermedades`
  ADD PRIMARY KEY (`id_enfermedad`);

--
-- Indices de la tabla `nutricion`
--
ALTER TABLE `nutricion`
  ADD PRIMARY KEY (`id_alimento`),
  ADD UNIQUE KEY `categoria_alimento` (`categoria_alimento`),
  ADD KEY `nombre_alimento` (`nombre_alimento`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pagos`),
  ADD KEY `id_usuarios` (`id_usuario`);

--
-- Indices de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_recomendacion` (`id_recomendacion`),
  ADD KEY `id_recomendacion_2` (`id_recomendacion`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`id_platillo`),
  ADD KEY `nombre_alimento` (`nombre_alimento`);

--
-- Indices de la tabla `platillos_usuario`
--
ALTER TABLE `platillos_usuario`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_platillo` (`id_platillo`);

--
-- Indices de la tabla `rango_edad`
--
ALTER TABLE `rango_edad`
  ADD PRIMARY KEY (`id_edad`),
  ADD KEY `edad_usuario` (`edad_usuario`);

--
-- Indices de la tabla `registro_usuario`
--
ALTER TABLE `registro_usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_enfermedad` (`id_enfermedad`),
  ADD KEY `id_alimento` (`id_alimento`),
  ADD KEY `id_ejercicios` (`id_ejercicios`),
  ADD KEY `id_pago` (`id_pago`),
  ADD KEY `edad_usuario` (`edad_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `diagnostico_usuario`
--
ALTER TABLE `diagnostico_usuario`
  MODIFY `id_recomendacion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `platillos_usuario`
--
ALTER TABLE `platillos_usuario`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_usuario`
--
ALTER TABLE `registro_usuario`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `registro_usuario` (`id_usuario`);

--
-- Filtros para la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  ADD CONSTRAINT `perfil_usuario_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `registro_usuario` (`id_usuario`),
  ADD CONSTRAINT `perfil_usuario_ibfk_4` FOREIGN KEY (`id_recomendacion`) REFERENCES `diagnostico_usuario` (`id_recomendacion`);

--
-- Filtros para la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD CONSTRAINT `platillos_ibfk_1` FOREIGN KEY (`nombre_alimento`) REFERENCES `nutricion` (`nombre_alimento`);

--
-- Filtros para la tabla `platillos_usuario`
--
ALTER TABLE `platillos_usuario`
  ADD CONSTRAINT `platillos_usuario_ibfk_1` FOREIGN KEY (`id_platillo`) REFERENCES `platillos` (`id_platillo`),
  ADD CONSTRAINT `platillos_usuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `registro_usuario` (`id_usuario`);

--
-- Filtros para la tabla `rango_edad`
--
ALTER TABLE `rango_edad`
  ADD CONSTRAINT `rango_edad_ibfk_1` FOREIGN KEY (`edad_usuario`) REFERENCES `registro_usuario` (`edad_usuario`);

--
-- Filtros para la tabla `registro_usuario`
--
ALTER TABLE `registro_usuario`
  ADD CONSTRAINT `registro_usuario_ibfk_1` FOREIGN KEY (`id_enfermedad`) REFERENCES `enfermedades` (`id_enfermedad`),
  ADD CONSTRAINT `registro_usuario_ibfk_2` FOREIGN KEY (`id_alimento`) REFERENCES `nutricion` (`id_alimento`),
  ADD CONSTRAINT `registro_usuario_ibfk_3` FOREIGN KEY (`id_ejercicios`) REFERENCES `ejercicios` (`id_ejercicios`),
  ADD CONSTRAINT `registro_usuario_ibfk_4` FOREIGN KEY (`id_pago`) REFERENCES `pagos` (`id_pagos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


