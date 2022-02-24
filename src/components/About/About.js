import React from 'react';
import about from '../../images/about-us.jpg';

const About = () => {
    return (
        <div>
            
            <div className="container flex justify-center min-h-screen mt-10">
                <div className="left justify-center p-4">
                    <h1 className='text-3xl'> About Agricultural Learning Management System</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Facilis nobis corporis, assumenda non natus architecto est ratione, 
                        repellat dolore sapiente eligendi dolorum consectetur deleniti dolores! 
                        Repellendus enim nam dolorum perferendis, placeat tenetur maiores aperiam 
                        harum labore pariatur quos ipsa reiciendis. Repellendus quis, 
                        consequuntur aspernatur harum quaerat quo ut cumque. 
                        Laboriosam, deserunt eveniet illo, commodi iure neque nesciunt quae, 
                        eius pariatur asperiores sapiente. Expedita sequi voluptatibus 
                        corrupti nihil ut beatae molestias iure esse doloremque iusto 
                        accusamus veniam totam debitis praesentium error suscipit, 
                        voluptatem est quia at fugiat et rerum mollitia quae? 
                        Qui dolores eum nesciunt distinctio labore animi itaque dolor molestias!</p>
                </div>
                <div className="right justify-center m-4 p-4">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
