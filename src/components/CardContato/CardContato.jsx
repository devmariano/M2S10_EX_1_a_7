import './CardContato.css'

function CardContato() {

    return (
        <div className="container ">
            <h1 className='mb-3'>Venha conhecer nossa loja<span className='text-top'>.</span></h1>
            <div className="card card-map p-0 shadow-sm mb-5">
                <div className="card-img-top" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.95447666929!2d-46.6821519!3d-23.5868031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e0ebff5b%3A0x769bf4a32f914782!2sGoogle!5e0!3m2!1spt-BR!2sbr!4v1688310076742!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="300"
                    ></iframe>
                </div>
                <div className="p-4">
                    <h4 className="mb-3">Matriz</h4>
                    <div className="d-flex mb-3">
                        <div className="col border-start border-5">
                            <p className="m-3">Av. Brg. Faria Lima, 3477 - 18º Andar - Itaim Bibi</p>
                            <p className="m-3">São Paulo - SP</p>
                        </div>
                        <div className="col border-start border-5">
                            <p className="m-3">faleconosco@devclass.com</p>
                            <p className="m-3">+55 21 9999-9999</p>
                        </div>
                    </div>
                    <small>Aberta de 08h as 18h de segunda a sexta</small>
                </div>
            </div>
        </div>

    )
}


export default CardContato;