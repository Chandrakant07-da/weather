import './weather.styles.css'


const WeatherApp =() =>{
     // const [city, setCity]= useState(null);
     // cosnt [search,setSearch]=useState("Raipur")
     
     
     // return(
     //      <>
     //           {/* <div className="box">
     //                <div className="inputData">
     //                     <input 
     //                          type="search"
     //                          className="inputField"
     //                           onChange={(event)=>{

     //                          }}                              
     //                          />
                         
     //                </div>
     //                <div className='info'>
     //                     <h2 className='location'>
     //                          Raipur
     //                     </h2>
     //                     <h1 className='temp'>

     //                     </h1>
     //                     <h3> </h3>
     //                </div>

     //           </div> */}

               
     //      </>
     // );


     const Weather = ({
          name,
          country,
          temperature,
          maxTemperature,
          minTemperature,
         
        }) => {
          return (
            <div className="weather-container">
              <div className="left">
                <h2>
                  {name}, {country}
                </h2>
               <div className="temperature">{temperature}&#176;C</div>                
              </div>
              <div className="right">
                <div className="column">
                  <div>{maxTemperature}&#176;C</div>
                  <div className="small">Maximum Temperature</div>
                </div>
                <div className="column">
                  <div>{minTemperature}&#176;C</div>
                  <div className="small">Minimum Temperature</div>
                </div>                
              </div>
            </div>
          );
        }
            
     }
export default WeatherApp