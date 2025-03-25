import './FAQPage.css'; // Asegúrate de crear un archivo CSS para los estilos

const FAQs = [
    {
        number: 1,
        question: "¿Cuándo y dónde será el evento?",
        answer: "¡El evento será el 30 de agosto de 2025 en la Ciudad de México! Prepárate para un día increíble.",
    },
    {
        number: 2,
        question: "¿Cuál es el costo de la entrada?",
        answer: "La entrada cuesta $250 pesos (aprox. 15 USD). ¡Una inversión para tu futuro!",
    },
    {
        number: 3,
        question: "¿Cómo puedo registrarme?",
        answer: "El registro estará disponible desde el 30 de junio de 2025, aquí mismo en nuestra página. ¡No te lo pierdas!",
    },
    {
        number: 4,
        question: "¿Habrá opciones de pago en el evento?",
        answer: "Aceptamos tarjetas de crédito y débito a través de Stripe.",
    },
    {
        number: 5,
        question: "¿De qué serán las conferencias?",
        answer: "El enfoque será tecnología y educación, ¡temas que están revolucionando el mundo!",
    },
    {
        number: 6,
        question: "¿Habrá streaming en vivo?",
        answer: "En esta edición no habrá streaming, pero no te preocupes, subiremos todas las conferencias y actividades a nuestras redes sociales.",
    },
    {
        number: 7,
        question: "¿Se proporcionará material de apoyo?",
        answer: "¡Sí! Todo el contenido digital se publicará en nuestra página web después del evento.",
    },
    {
        number: 8,
        question: "¿Habrá actividades de networking?",
        answer: "¡Claro! El networking es lo que más nos importa en UniconHub. ¡Conéctate con gente que comparte tus intereses!",
    },
    {
        number: 9,
        question: "¿Cómo contacto a los organizadores?",
        answer: "Puedes escribirnos a soporte@uniconhub.org para cualquier duda.",
    },
    {
        number: 10,
        question: "¿Habrá comida y bebida?",
        answer: "Sí, habrá catering. Te informaremos el menú unas semanas antes del evento.",
    },
    {
        number: 11,
        question: "¿Qué medidas de seguridad se tomarán?",
        answer: "Vamos a cuidarte. Tendremos control de temperatura, uso obligatorio de mascarillas, áreas desinfectadas, estaciones de sanitización, y distancia entre asientos.",
    },
    {
        number: 12,
        question: "¿Puedo cancelar o reembolsar mi entrada?",
        answer: "¡Claro! Puedes cancelarla hasta 72 horas antes del evento escribiéndonos a soporte@uniconhub.org.",
    },
];

const FAQPage = () => {
    return (
        <div className="faq-container">
            <h2>FAQ's - Preguntas frecuentes</h2>
            <div className="faq-grid">
                {FAQs.map((faq) => (
                    <div key={faq.number} className="faq-item">
                        <div className="faq-number">{faq.number}</div>
                        <div className="faq-content">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
