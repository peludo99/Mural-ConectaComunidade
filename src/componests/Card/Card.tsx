
import './Card.css'


function Card() {
    return (




        <div className="container">

            <div className="containerUserNav">

                <div className="containerUserNavImage">
                    <img src="https://avatars.githubusercontent.com/u/105328644?v=4" alt="User Avatar" />
                </div>

                <div className="containerUserNavInfo">

                    <div className="containerUserNavInfoName">
                        <h3>Cauan</h3>
                    </div>

                    <div className="containerUserNavInfoDate">
                        <p>há 2 dias</p>
                    </div>

                </div>

                <div className="containerUserNavOptions">
                    <div className="containerUserNavOptionsClass">
                        <p>#Aviso</p>
                    </div>
                    <div className="containerUserNavOptionsButtons">
                        <button className="editButton">...</button>
                       
                    </div>
                </div>






            </div>

            <div className="containerContent">
               
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti animi voluptas, qui reprehenderit expedita, itaque blanditiis quos sequi iusto magni doloribus? Sapiente nostrum enim nisi placeat quibusdam recusandae facilis.</p>
            </div>



            <div className="containerFooter">
                <div className="containerFooterItems">

                    <div className="containerFooterItemsLike">
                        <i className="fa-regular fa-heart"></i>
                    </div>  
                    <div className="containerFooterItemsComment">
                       <i className="fa-regular fa-comment"></i>
                    </div>
                </div>

                <div className="containerFooterReport">
                    <i className="fa-regular fa-flag"></i>
                </div>
                


            </div>


          
           



            {/* <div className="card">
                    <h2>Card Title</h2>
                    <p>This is a card component.</p>
                </div> */}



        </div>




    )

}

export default Card
