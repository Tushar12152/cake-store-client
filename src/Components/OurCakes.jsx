import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Container from "../shared/Container";
import Title from "../shared/Title";
import 'react-tabs/style/react-tabs.css';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosHooks/useAxiosSecure";
import CakeCard from "./CakeCard";

const OurCakes = () => {


    
    const axiosSecure=useAxiosSecure()


    const { data:cakes=[]} = useQuery({
        queryKey: ['cake'],
        queryFn: async() =>{
          const res=await axiosSecure.get('/cakes')
          return res.data
     } })
  

// console.log(cakes);

  const chocolateCake=cakes.filter(cake=>cake.Category==='chocolate_cake')
  const strawberryCake=cakes.filter(cake=>cake.Category==='strawberry_cake')
  const cupCake=cakes.filter(cake=>cake.Category==='cup_cake')
  const orangeCake=cakes.filter(cake=>cake.Category==='orange_cake')
  const coffeeCake=cakes.filter(cake=>cake.Category==='coffee_cake')



    return (
        <Container>
             <div>
                 <Title heading={'Our Cakes'}></Title>
             </div>
   

             <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Chocolate cake</Tab>
      <Tab>Strawberry Cake</Tab>
      <Tab>Cup cake</Tab>
      <Tab>Orange cake</Tab>
      <Tab>Coffee cake</Tab>
    </TabList>
    

    <TabPanel>
     <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        cakes.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>
    <TabPanel>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        chocolateCake.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>

    <TabPanel>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        strawberryCake.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>


    <TabPanel>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        cupCake.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>


    <TabPanel>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        orangeCake.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>
    

    <TabPanel>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
     {
        coffeeCake.map(cake=><CakeCard key={cake._id} cake={cake}></CakeCard>)
     } 
       </div> 
    </TabPanel>
  </Tabs>
          


        </Container>
    );
};

export default OurCakes;