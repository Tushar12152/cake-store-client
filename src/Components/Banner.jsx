import Container from "../shared/Container";

const Banner = () => {
    return (
       <Container>
         <div className="bg-[url('https://i.ibb.co/NsFv5bD/cakestorebanner22-1536x361.webp')] h-[400px] bg-no-repeat mt-10 relative ">
             <h1 className="absolute top-40 lg:left-[500px] left-[50px] animate-bounce text-white font-bold  text-4xl">Nazme,s Cake Shop</h1>
           </div>
       </Container>
    );
};

export default Banner;