import './FAQPage.css';

import FAQItem from '../components/FAQItem';


export default function FAQPage() {
    const faqs = [
        {
            question: "¿Cuándo y dónde se llevará a cabo el evento?",
            answer: "El evento sera el proximo 25 de Enero de 2024, en la Ciudad de México."
        },
        {
            question: "¿Cuál es el costo de la entrada?",
            answer: "La entrada tiene un costo de $250 pesos aproximadamente 15 USD."
        },
        {
            question: "¿Cómo puedo registrarme?",
            answer: "El registro se activara el proximo 15 de Noviembre de 2024, y se hará en esta misma página."
        },
        {
            question: "¿Habrá opciones de pago en el evento?",
            answer: "Las opciones que aceptamos por el momento son tarjetas de crédito, debito atravez de Stripe."
        },
        {
            question: "¿Qué tipo de conferencias se ofrecerán?",
            answer: "Las conferencias seran mayormente de tecnoligía y como educación"
        },
        {
            question: "¿Habrá acceso a streaming en vivo?",
            answer: "Aun que en esta edicion no haremos streaming, se suviran las conferencias y actividades en nuestras redes sociales."
        },
        {
            question: "¿Se proporcionará material de apoyo?",
            answer: "Las presentaciones y contendo digital utilizado sera publicado en nuestra página web."
        },
        {
            question: "¿Habrá actividades de networking?",
            answer: "El principal objetivo de UniconHub es el networking, lo mas importante para nosotros son ustedes, nuestra comunidad."
        },
        {
            question: "¿Cómo puedo contactar a los organizadores?",
            answer: "Nuestro correo es soporte@unicon.mx"
        },
        {
            question: "¿Habrá opciones de comida y bebida?",
            answer: "Tendremos un catering disponible, se estara informando el menu un par de semanas antes del evento."
        },
        {
            question: "¿Qué medidas de seguridad se implementarán?",
            answer: "Se implementarán las siguientes medidas de seguridad y salud en el evento: \n- Control de temperatura a la entrada del evento. \n- Uso obligatorio de mascarillas para todos los asistentes y personal. \n- Desinfección regular de áreas comunes y estaciones de sanitización disponibles. \n- Espaciado adecuado entre asientos en las áreas de conferencias. \n- Protocolo de emergencias en caso de cualquier incidente. \n- Monitoreo constante de las recomendaciones de salud pública y ajuste de las medidas según sea necesario."
        },
        {
            question: "¿Se puede cancelar o reembolsar la entrada?",
            answer: "Claro siempre sera posible eso 72 hrs antes del evento, solo sera necesario que se comuniquen con nosotro en nuestro email soporte@unicon.mx"
        }
    ];

    return (
        <div className='body-faq' id='FAQ'>
            <h1>Preguntas Frecuentes</h1>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};
