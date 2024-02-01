import ReactDOM from 'react-dom' ;


import  { useEffect, useState } from 'react'
import ImgMediaCard from './ImgMediaCard';
import PagiNation from './Pagination';
import { useSelector } from 'react-redux'
import moment from 'moment';
import Historybtn from './Historybtn';



export default function App() {

  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100');
        const result = await response.json();
        
       
        const tempRespons = shortingGender(result.results)
        setUserData(tempRespons)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const [curent, setcurent] = useState(1); //3
  const curent = useSelector(state => state.pageInitial)
  const perPageData = 10;
 
  const firstIndex = (curent-1) * perPageData;  //0 // 20
  const lastIndex = firstIndex +  perPageData//10 // 30
 
const temp = Object.values(userData);
  const curentData = temp.slice(firstIndex, lastIndex); // 0-10 // 20-30
  // console.log(curentData);

//shorting
function shortingGender(data){
  const shortedGenderMale = data.filter(
    single  => single.gender == "male"
  );

   const shortedGenderFemale = data.filter(
    single  => single.gender == "female"
  );

 const  tempShorting = [...shortedGenderMale , ...shortedGenderFemale]
  return tempShorting
}

//history

useEffect(()=>{
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const updatedData = {
    visitedTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    data: userData,
  };
  if(userData !== null){
    localStorage.setItem('history', JSON.stringify([...history, updatedData]));
  }

}, [userData])


  return (
    <>
    <Historybtn/>
    <div style={{ width: '100%',display:'flex' , overflow:"hidden" , flexWrap:"wrap" }} >
      {curentData ? (
        // Render your data here
        curentData.map((user, index) => (
          <div key={index} >
           
            {/* Add more details as needed */}
            <ImgMediaCard obj={user} />
          </div>
        ))
      ) : (
        // Loading or error message
        <p>Loading...</p>
      )}
    </div>

      <PagiNation />
      </>
  );
};



